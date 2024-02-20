import { HttpErrorResponse, HttpClient } from "@angular/common/http";
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
  NgForm,
  Validators,
} from "@angular/forms";
import { AppCommonService, AppToastService } from "@common/services";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { DataTableDirective } from "angular-datatables";
import { Observable, Subject } from "rxjs";
import { AnApplicationUsersInterface } from "./../../services/an-application-users.service";

@Component({
  selector: "sb-an-application-users",
  templateUrl: "./an-application-users.component.html",
  styleUrls: ["an-application-users.component.scss"],
})
export class AnApplicationUsersComponent
  implements AfterViewInit, OnDestroy, OnInit {
  form: FormGroup | undefined;
  ModelInterface: Observable<AnApplicationUsersInterface> | undefined;
  closeResult: string | undefined;
  title = "Application Users";
  loading = false;

  alertSuccess = false;
  alertError = false;
  alertInfo = false;
  alertTitle = "";
  alertContent = "";

  modalReference: any;
  dtOptions: DataTables.Settings = {};
  public dEdit: any;

  public persons: any; // BoApplicationModel[] | undefined;
  public dataTableTemp: any;
  public myTable: boolean = true;
  @ViewChild("mymodal") modalContent: TemplateRef<any> | undefined;
  @ViewChild("myDialog") dialogContent: TemplateRef<any> | undefined;

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective | undefined;
  dtTrigger: Subject<any> = new Subject();
  optionsApplications: any;
  optionsBranch: any;
  dataData: any;
  dataBranch: any;
  dataListBranch: any;
  data2: any;

  listBranch = [];

  constructor(
    private formBuilder: FormBuilder,
    private modalService: NgbModal,
    private Api: AppCommonService,
    public Toast: AppToastService,
    public http: HttpClient
  ) {}
  ngOnInit(): void {
    this.form?.reset();
    this.form = this.formBuilder.group({
      uuidUsers: [],
      uuidRoles: ["", Validators.required],
      branchList: [],
      email: ["", Validators.required],
      fullname: ["", Validators.required],
      password: ["", Validators.required],
      phone: ["", Validators.required],
      active: true,
      new: [],
    });
    this.dEdit = {
      uuidUsers: "",
      uuidRoles: "",
      branchList: [],
      email: "",
      fullname: "",
      phone: "",
      password: "",
      active: true,
    };

    this.optionsApplications = {
      multiple: false,
    };

    this.optionsBranch = {
      multiple: true,
    };

    this.loadTable();
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
      
        // if (data) {
        //   this.dEdit.uuidRoles = data;
        // } else {
        //   this.dEdit.uuidRoles = null;
        // }
        // this.form?.patchValue(this.dEdit);
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

  getBranch(data: any) {
    this.Api.get(
      this.Api.URLServiceAntasena + "application-branch/get-all"
    ).subscribe(
      (dataResult) => {
        this.dataBranch = [];
        // this.dataListBranch = [];
        dataResult.data.forEach(
          (element: { uuidBranch: any; nameBranch: any }) => {
            const json = {
              id: element.uuidBranch,
              text: element.nameBranch,
            };
            this.dataBranch.push(json);
            // this.dataListBranch.push(element.uuidBranch);
          }
        );

        // if (data) {
        //     this.dEdit.branchList = data;
        // } else {
        //     this.dEdit.branchList = null;
        // }
        // if (data) {
        //   this.dEdit.ID = data;
        // } else {
        //   this.dEdit.ID = null;
        // }
        // this.form?.patchValue(this.dEdit);
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

  // getBranch(data: any, isEdit = false) {
  //     this.Api.get(this.Api.URLServiceAntasena + 'application-branch/get-all').subscribe(
  //         dataResult => {
  //             this.dataBranch = [];
  //             let lastData;
  //             dataResult.data.forEach(
  //                 (element: {branchList: any; nameBranch:any}) => {
  //                     const json= {
  //                         id: element.uuidBranch,
  //                         text: element.nameBranch,
  //                     }
  //                     this.dataBranch.push(json);
  //                     lastData = { id: element.uuidBranch, text: element.nameBranch };

  //                 }
  //             );
  //             if (data) {
  //                 this.dEdit.branchList = data;
  //             } else {
  //                 this.dEdit.branchList = lastData;
  //             }
  //             this.form?.patchValue(this.dEdit);
  //             this.loading = false;
  //         },

  //         err => {
  //             if (err instanceof HttpErrorResponse) {
  //                 const errorMessages = new Array<{ propName: string; errors: string }>();
  //                 this.loading = false;
  //                 this.modalService.dismissAll();
  //                 this.alertBoxError(this.title, err.message);
  //                 if (err.status === 401 || err.status === 403) {
  //                     this.Api.redirectToLogin();
  //                 }
  //             }
  //         }
  //     );
  // }

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

    if (this.form) {

      this.getRole(true);
      this.getBranch(true);

      this.form.controls.email.enable();
          
      this.form.patchValue({
        uuidRoles: '',
        branchList: [],
        email: '',
        fullname: '',
        phone: '',
        password: '',
        active: true,
        new: true,
      });

      if (this.form.controls.uuidUsers) {
        this.form.removeControl("uuidUsers");
      }

    } 
    this.openModal();
  }

  showEdit(data: any) {
    this.openModal();
    this.loading = true;
    this.form?.controls.email.disable();
    alert("Please update your password")
    // this.form?.controls.email.disable();
    //this.form?.controls.uuidUsers.disable();

    this.Api.get(
      this.Api.URLServiceAntasena +
        "application-users/find-by-id?uuid_users=" +
        data.uuidUsers
      // tslint:disable-next-line: no-shadowed-variable
    ).subscribe(
      (data) => {
        
        this.dEdit = data.data;
        this.dEdit.new = false;
        // const d = data.data;
        // d.new = false;
        // this.dEdit.password = "";
        // d.new = false;
        this.form?.patchValue(this.dEdit);
        
        this.getRole(null);
        this.getBranch(null);

        // this.getRole(data.data.uuidRoles);
        // this.getBranch(data.data.ID);
        this.loading = false;
        // this.getRole(data.data.ID);
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
          if (err.status === 401 || err.status === 403) {
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
            this.loading = true;
            this.Api.post(
              this.Api.URLServiceAntasena +
                "application-users/delete-by-id?uuid_users=" +
                data.uuidUsers,
              {
                uuidUsers: data.uuidUsers,
              }
            ).subscribe(
              (dataResult) => {
                this.loading = false;
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
                  if (err.status === 401 || err.status === 403) {
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
      //   this.loading = true;
      //   const formData = new FormData();
      //   let a = 0;

      //   this.form.controls.branchList.value.forEach(
      //     (element: { id: string | Blob }) => {
      //       formData.append("branchList[" + a + "]", element.id);
      //       a++;
      //     }
      //   );

      //   formData.append("uuidRoles", this.form.controls.uuidRoles.value);
      //   formData.append("email", this.form.controls.email.value);
      //   formData.append("fullname", this.form.controls.fullname.value);
      //   formData.append("phone", this.form.controls.phone.value);
      //   formData.append("password", this.form.controls.password.value);
      //   formData.append("active", this.form.controls.active.value);

      //   this.Api.post(
      //     this.Api.URLServiceAntasena + "application-users/save",
      //     formData
      //   ).subscribe((res) => {
      //     this.loading = false;
      //     this.rerender();
      //     this.modalService.dismissAll();
      //     this.alertBoxSuccess(this.title, "data has been saved successfully.");
      //   });

      if (this.form.valid) {
        this.loading = true;

        if (this.form.controls.email.disabled) {
          this.form.controls.email.enable();
        }
        // if (this.form.controls.kodeCabang.value == '') {
        //     this.form.removeControl('kodeCabang');
        // }

        // if (this.form.controls.uuidUsers.value == "") {
        //  this.form.removeControl("uuidUsers");
        // }

        // if (this.form.controls.uuidUsers.disabled) {
        //     this.form.controls.uuidUsers.enable();
        // }

        //console.log(this.form.value);
        //return true

        this.Api.post(
          this.Api.URLServiceAntasena + "application-users/save",
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
              if (err.status === 401 || err.status === 403) {
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
          this.Api.URLServiceAntasena + "application-users/find-all",
          dataTablesParameters
        ).subscribe(
          (resp: { data: any; recodsTotal: any; recordsFiltered: any }) => {

            let newResp = [];
            for (let data of resp.data.data) {
              let copyData = data;
              let dataBranchList = data.branchList;

              let tempList = [];
              for (let tempBranchList of dataBranchList) {
                tempList.push(tempBranchList.nameBranch);
              }
              
              copyData.branchList = tempList;
              newResp.push(copyData);
            }

            // this.dataTableTemp = resp.data.data;
            this.dataTableTemp = newResp;
            // console.log(newResp);
            // console.log("disini");
            // console.log(this.dataTableTemp);
            
          
            callback({
              recordsTotal: resp.data.recodsTotal,
              recordsFiltered: resp.data.recordsFiltered,
              data: [],
            });
          },
          (err: { error: { message: string }; status: number }) => {
            if (err instanceof HttpErrorResponse) {
              const errorMessages = new Array<{
                propName: string;
                errors: string;
              }>();
              this.loading = false;
              if (err.status === 401 || err.status === 403) {
                this.Api.redirectToLogin();
              }
            }
          }
        );
      },
      columns: [{ data: "email" }],
    };

    this.dtOptions.drawCallback = function (data) {};
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

