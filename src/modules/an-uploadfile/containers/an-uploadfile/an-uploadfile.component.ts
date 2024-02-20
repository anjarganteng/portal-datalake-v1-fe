import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    HostListener,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewChild,
} from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { AppCommonService, AppToastService } from '@common/services';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DataTableDirective } from 'angular-datatables';
import { Observable,Subject } from 'rxjs';
import { AnUploadfileInterface } from './../../services/an-uploadfile.service';

@Component({
    selector: 'sb-an-uploadfile',
    templateUrl: './an-uploadfile.component.html',
    styleUrls: ['an-uploadfile.component.scss'],
})
export class AnUploadfileComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnUploadfileInterface> | undefined;
    closeResult: string | undefined;
    title = 'Upload Files';
    loading = false;

    alertSuccess=false;
    alertError=false;
    alertInfo=false;
    alertTitle="";
    alertContent="";

    modalReference: any;
    dtOptions: DataTables.Settings = {};

    public persons: any; // BoApplicationModel[] | undefined;
    public dataTableTemp: any;
    public myTable: boolean = true;
    @ViewChild('mymodal') modalContent: TemplateRef<any> | undefined;
    @ViewChild('myDialog') dialogContent: TemplateRef<any> | undefined;

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective | undefined;
    dtTrigger: Subject<any> = new Subject();
    dEdit: any;
    optionsApplications: any;
    dataData: any;
    data2: any;

    constructor(
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private Api: AppCommonService,
        public Toast: AppToastService,
        private http: HttpClient
    ) {}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            id: ['', Validators.required],
            dataFile: new FormControl('', [Validators.required]),
            dataFileSource: new FormControl('', [Validators.required]),
        });
        this.dEdit = {
            id: '',
            dataFile: '',
            dataFileSource: '',
        };
        
        this.optionsApplications = {
            multiple: false,
        };
        
        this.loadTable();
    }

    ondataFileChange(event: { target: {files: string | any[] } }) {
        if (event.target.files.length > 0) {
            const file = event.target.files[0];
            this.form?.patchValue({
                dataFileSource: file,
            });
            console.log(this.form?.controls.dataFileSource);
        }
    }

    ngAfterViewInit(): void {
        this.dtTrigger.next();
    }

    ngOnDestroy(): void {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    }


    getData(data: any, isEdit = false) {
        this.Api.get(this.Api.URLServiceAntasena + 'list-menu/get-all?form=' + "antasena").subscribe(
            dataResult => {
                this.dataData = [];
                let lastData;
                dataResult.data.forEach(
                    (element: {id: any; namaMenu:any, deskripsi: any}) => {
                        const json= {
                            id: element.deskripsi,
                            text: element.namaMenu,
                        }
                        this.dataData.push(json);
                        lastData = { id: element.deskripsi, text: element.namaMenu };
                    }
                );
                if (data) {
                    this.dEdit.id = data;
                } else {
                    this.dEdit.id = lastData;
                }
                this.form?.patchValue(this.dEdit);
                this.loading = false;
            },

            err => {
                if (err instanceof HttpErrorResponse) {
                    const errorMessages = new Array<{ propName: string; errors: string }>();
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
                ariaLabelledBy: 'modal-basic-title',
                size: 'lg',
                backdrop: 'static',
            })
            .result.then(
                result => {
                    this.closeResult = `Closed with: ${result}`;
                },
                reason => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                }
            );
    }

    showAdd() {
        if (this.form) {
			this.dEdit = {
                id: '',
                dataFile: '',
                dataFileSource: '',
            };

            if (!this.form.controls.id) {
                this.form.addControl('id', new FormControl(''));
            }

            this.form.patchValue(this.dEdit);
            this.getData(null);
         }

        this.openModal();
    }

    doDelete(data: any) {}

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
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
            

                const formData = new FormData();
                formData.append('obj', this.form.controls.id.value.id);
                formData.append('file', this.form.controls.dataFileSource.value);

                this.Api.post(
                    this.Api.URLServiceAntasena + 'upload-file/save-excel', 
                    formData
                ).subscribe(
                    data => {
                        if (data.status) {
                            this.loading = false;
                            this.rerender();
                            this.modalService.dismissAll();
                            this.alertBoxSuccess(this.title, 'excel data imported into the database');
                        } else {
                            this.alertBoxError(this.title, data.message);
                        }
                
                    },
                    err => {
                        if (err instanceof HttpErrorResponse) {
                            const errorMessages = new Array<{ propName: string; errors: string }>();
                            this.loading = false;
                            
                            // calling method untuk reload setelah gagal upload
                            this.rerender();
                            
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
            pagingType: 'full_numbers',
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.Api.loadDataTable(
                    this.Api.URLServiceAntasena + 'upload-file/find-all-antasena',
                    dataTablesParameters
                ).subscribe(
                    (resp: { data: any; recodsTotal: any; recordsFiltered: any }) => {
                        this.dataTableTemp = resp.data.data;
                        callback({
                            recordsTotal: resp.data.recodsTotal,
                            recordsFiltered: resp.data.recordsFiltered,
                            data: [],
                        });
                    },
                    (err: { error: { message: string }; status: number }) => {
                        if (err instanceof HttpErrorResponse) {
                            const errorMessages = new Array<{ propName: string; errors: string }>();
                            this.loading = false;
                            if (err.status === 401 || err.status === 403) {
                                this.Api.redirectToLogin();
                            }
                        }
                    }
                );
            },
            columns: [{ data: 'fileName' }, { data: 'inputDate' }, { data: 'inputTime' }],
        };

        this.dtOptions.drawCallback = function (data) {};
    }



    alertBoxSuccess(title:string,content:string){
        this.alertSuccess=true;
        this.alertError =false;
        this.alertInfo = false;
        this.alertTitle = title;
        this.alertContent = content;
    }

    alertBoxError(title:string,content:string){
        this.alertSuccess=false;
        this.alertError =true;
        this.alertInfo = false;
        this.alertTitle = title;
        this.alertContent = content;
    }

    alertBoxInfo(title:string,content:string){
        this.alertSuccess=false;
        this.alertError =false;
        this.alertInfo = true;
        this.alertTitle = title;
        this.alertContent = content;
    }

}
