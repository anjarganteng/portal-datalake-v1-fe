import { HttpErrorResponse } from "@angular/common/http";
import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  TemplateRef,
  ViewChild,
} from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormArray,
  NgForm,
  Validators,
} from "@angular/forms";
import { AppCommonService, AppToastService } from "@common/services";
import { FaLayersComponent } from "@fortawesome/angular-fontawesome";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DataTableDirective } from "angular-datatables";
import { Observable, Subject } from "rxjs";
import { AnPrivilegesInterface } from "./../../services/an-privileges.service";

@Component({
  selector: "sb-an-privileges",
  templateUrl: "./an-privileges.component.html",
  styleUrls: ["an-privileges.component.scss"],
})
export class AnPrivilegesComponent implements AfterViewInit, OnDestroy, OnInit {
  form: FormGroup | undefined;
  formChild: FormGroup | undefined;
  items: FormArray;

  ModelInterface: Observable<AnPrivilegesInterface> | undefined;
  closeResult: string | undefined;
  title = "Assign Privileges";
  loading = false;

  alertSuccess = false;
  alertError = false;
  alertInfo = false;
  alertTitle = "";
  alertContent = "";

  modalReference: any;
  dtOptions: DataTables.Settings = {};

  public persons: any; // BoApplicationModel[] | undefined;
  public dataTableTemp: any;
  public myTable: boolean = true;
  @ViewChild("mymodal") modalContent: TemplateRef<any> | undefined;
  @ViewChild("myDialog") dialogContent: TemplateRef<any> | undefined;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective | undefined;
  dtTrigger: Subject<any> = new Subject();
  dEdit: any;
  dataData: any;
  data2: any;
  optionData: any;

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private Api: AppCommonService,
    public Toast: AppToastService
  ) {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      uuidRoles: ["", Validators.required],
      menuList: this.formBuilder.array([
        this.createItem('', 'null',0, false, false, false, false, false),
      ]),
    });

    this.formChild = this.formBuilder.group({
      namaMenu: "test",
    });
    this.dEdit = {
      ID: "",
      DATA: "",
      new: false,
    };
    this.optionData = {
      multiple: false,
    };
    this.getRole(null);
    //this.loadTable();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.dtTrigger.unsubscribe();
  }

  getRole(data: any) {
    this.Api.get(
      this.Api.URLServiceAntasena + "application-roles/get-all"
    ).subscribe(
      (dataResult) => {
        this.dataData = dataResult.data;
        if (data) {
          this.dEdit.uuidRoles = data;
        } else {
          this.dEdit.uuidRoles = null;
        }
        this.form?.patchValue(this.dEdit);
        this.loading = false;
      },

      (err) => {
        if (err instanceof HttpErrorResponse) {
          const errorMessages = new Array<{
            propName: string;
            errors: string;
          }>();
          this.loading = false;
          this.modalService.dismissAll();
          this.alertBoxError(this.title, err.message);
          if (err.status === 401 || err.status === 403) {
            this.Api.redirectToLogin();
          }
        }
      }
    );
  }

  getPrivileged(data: any) {
    this.Api.get(
      this.Api.URLServiceAntasena +
        "list-menu/get-all-only-modul?uuid_roles=" +
        data
    ).subscribe(
      (dataResult) => {
        this.items = this.form?.get("menuList") as FormArray;
        this.items.clear();
        if (this.form) {
        //   if (this.form.controls.menuList) {
        //     this.form.removeControl("menuList");
        //     console.log('remove menuLIST');
        //   }

        //   if (!this.form.controls.menuList) {
        //     this.form.addControl("menuList", new FormControl(""));
        //     console.log('Add menuLIST');
        //   }
        }
        dataResult.data.forEach((element: any) => {
          console.log(element);

         
          this.items.push(
            this.createItem(
              element.namaMenu,
              element.id,
              element.permissionList.rolesMenusId,
              element.permissionList.canDownload,
              element.permissionList.canRead,
              element.permissionList.canRegenerate,
              element.permissionList.canUpdate,
              element.permissionList.canUpload
            )
          );
        });

        console.log(dataResult);
        this.loading = false;
      },

      (err) => {
        if (err instanceof HttpErrorResponse) {
          const errorMessages = new Array<{
            propName: string;
            errors: string;
          }>();
          this.loading = false;
          this.modalService.dismissAll();
          this.alertBoxError(this.title, err.message);
          if (err.status === 401 || err.status === 403) {
            this.Api.redirectToLogin();
          }
        }
      }
    );
  }

  createItem(
    name: string,
    menuId: string,
    rolesMenusId: any,
    canDownload: boolean,
    canRead: boolean,
    canRegenerate: boolean,
    canUpdate: boolean,
    canUpload: boolean
  ): FormGroup {
    return this.formBuilder.group({
      name: name,
      menuId: menuId,
      rolesMenusId:rolesMenusId,
      canDownload: canDownload,
      canRead: canRead,
      canRegenerate: canRegenerate,
      canUpdate: canUpdate,
      canUpload: canUpload,
    });
  }

  onOptionsSelected(value: string) {
    this.getPrivileged(value);
    //console.log("the selected value is " + value);
  }

  rerender(): void {
    if (this.dtElement) {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
        dtInstance.destroy();
        dtInstance.ajax.reload();
        this.dtTrigger.next();
      });
    }
  }

  openModal() {
    this.modalService
      .open(this.modalContent, {
        ariaLabelledBy: "modal-basic-title",
        size: "lg",
        backdrop: "static",
      })
      .result.then(
        (result) => {
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  showAdd() {
    //console.log(this.form.value);
  }

  showEdit(data: any) {
    this.openModal();
    this.loading = true;

    this.Api.get(
      this.Api.URLServiceAntasena + "MODULEURL/find-by-id?id=" + data.id
      // tslint:disable-next-line: no-shadowed-variable
    ).subscribe(
      (data) => {
        this.dEdit = data.data;
        // d.new = false;
        this.form?.patchValue(this.dEdit);
        //this.getData(data.data.ID);
        this.loading = false;
      },
      (err) => {
        if (err instanceof HttpErrorResponse) {
          const errorMessages = new Array<{
            propName: string;
            errors: string;
          }>();
          this.loading = false;
          this.modalService.dismissAll();
          this.alertBoxError(this.title, err.error.message);
          if (err.status === 401) {
            this.Api.redirectToLogin();
          }
        }
      }
    );
  }

  showDelete(data: any) {
    this.modalService
      .open(this.dialogContent, {
        ariaLabelledBy: "modal-basic-title",
        size: "sm",
        backdrop: "static",
      })
      .result.then(
        (result) => {
          this.closeResult = `${result}`;
          if (this.closeResult == "dodelete") {
            console.log(data);
            this.Api.post(
              this.Api.URLServiceAntasena +
                "MODULEURL/delete-by-id?id=" +
                data.id,
              {
                ID: data.id,
              }
            ).subscribe(
              (dataResult) => {
                this.rerender();
                this.alertBoxSuccess(
                  this.title,
                  "data has been deleted successfully."
                );
              },
              (err) => {
                if (err instanceof HttpErrorResponse) {
                  const errorMessages = new Array<{
                    propName: string;
                    errors: string;
                  }>();
                  this.loading = false;
                  this.modalService.dismissAll();
                  this.alertBoxError(this.title, err.error.message);
                  if (err.status === 401) {
                    this.Api.redirectToLogin();
                  }
                }
              }
            );
          }
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
          console.log(this.closeResult);
        }
      );
  }

  doDelete(data: any) {}

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  onSubmit(f: NgForm) {
    //console.log(f.value.applicationName);
  }

  submit() {
    if (this.form) {
      if (this.form.valid) {
        this.loading = true;
       
        this.Api.post(
          this.Api.URLServiceAntasena + "application-roles/save",
          this.form.value
        ).subscribe(
          (data) => {
            console.log(data.status);
            if (data.status) {
              this.loading = false;
              this.rerender();
              this.modalService.dismissAll();
              this.alertBoxSuccess(
                this.title,
                "data has been saved successfully."
              );
            } else {
              this.alertBoxError(this.title, data.message);
            }
          },
          (err) => {
            if (err instanceof HttpErrorResponse) {
              const errorMessages = new Array<{
                propName: string;
                errors: string;
              }>();
              this.loading = false;
              this.modalService.dismissAll();
              this.alertBoxError(this.title, err.error.message);
              if (err.status === 401) {
                this.Api.redirectToLogin();
              }
            }
          }
        );
      }
    }
  }

  loadTable() {
    const that = this;
    that.dtOptions = {
      pagingType: "full_numbers",
      serverSide: true,
      processing: true,
      ajax: (dataTablesParameters: any, callback) => {
        this.Api.loadDataTable(
          this.Api.URLServiceAntasena + "MODULEURL/find-all",
          dataTablesParameters
        ).subscribe(
          (resp: { data: any; recodsTotal: any; recordsFiltered: any }) => {
            this.dataTableTemp = resp.data.data;
            callback({
              recordsTotal: resp.data.recodsTotal,
              recordsFiltered: resp.data.recordsFiltered,
              data: [],
            });
          }
        );
      },
      columns: [{ data: "ID" }, { data: "DATA" }],
    };

    this.dtOptions.drawCallback = function () {};
  }

  alertBoxSuccess(title: string, content: string) {
    this.alertSuccess = true;
    this.alertError = false;
    this.alertInfo = false;
    this.alertTitle = title;
    this.alertContent = content;
  }

  alertBoxError(title: string, content: string) {
    this.alertSuccess = false;
    this.alertError = true;
    this.alertInfo = false;
    this.alertTitle = title;
    this.alertContent = content;
  }

  alertBoxInfo(title: string, content: string) {
    this.alertSuccess = false;
    this.alertError = false;
    this.alertInfo = true;
    this.alertTitle = title;
    this.alertContent = content;
  }
}
