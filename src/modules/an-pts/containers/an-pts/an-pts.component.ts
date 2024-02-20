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
import { saveAs } from 'file-saver';

import { AnPtsInterface } from './../../services/an-pts.service';

@Component({
    selector: 'sb-an-pts',
    templateUrl: './an-pts.component.html',
    styleUrls: ['an-pts.component.scss'],
})
export class AnPtsComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnPtsInterface> | undefined;
    closeResult: string | undefined;
    title = 'PTS';
    loading = false;

    alertSuccess=false;
    alertError=false;
    alertInfo=false;
    alertTitle="";
    alertContent="";

    modalReference: any;
    dtOptions: DataTables.Settings = {};
    public dEdit: any;

    public persons: any; // BoApplicationModel[] | undefined;
    public dataTableTemp: any;
    public myTable: boolean = true;
    @ViewChild('mymodal') modalContent: TemplateRef<any> | undefined;
    @ViewChild('myDialog') dialogContent: TemplateRef<any> | undefined;

    @ViewChild(DataTableDirective, { static: false })
    dtElement: DataTableDirective | undefined;
    dtTrigger: Subject<any> = new Subject();

    constructor(
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private Api: AppCommonService,
        public Toast: AppToastService,
        public http: HttpClient,
    ) {}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            sandiAntasena: [],
            deskripsiSandi: ['', Validators.required],
            kodeGl: ['', Validators.required],
            deskripsiGl: ['', Validators.required],
            mataUang: ['', Validators.required],
            new: [],
        });
        this.dEdit = {
            sandiAntasena: '',
            deskripsiSandi: '',
            kodeGl: '',
            deskripsiGl: '',
            mataUang: '',
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

    getExcelData() {
        this.http.get(this.Api.URLServiceAntasena + 'pts/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Pts.xlsx');
            })
    }

    // regenerateData() {
    //     if (confirm('Are you sure you want to do this?')) {
    //         this.Api.post(
    //             this.Api.URLServiceAntasena + 'pts/regenerate-data?namaProses=' +
    //             'FORM_ASET_ANTAR_KANTOR',
    //             {
    //                 namaProses: 'FORM_ASET_ANTAR_KANTOR'
    //             }
    //             ).subscribe(
    //                 data => {
    //                     if (data.status) {
    //                         this.modalService.dismissAll();
    //                         this.alertBoxSuccess(this.title, 'trigger regenerate data.');
    //                     } else {
    //                         this.alertBoxError(this.title, data.message);
    //                     }
    //                 },
    //                 err => {
    //                     if (err instanceof HttpErrorResponse) {
    //                         const errorMessages = new Array<{ propName: string; errors: string }>();
    //                         this.loading = false;
    //                         this.modalService.dismissAll();
    //                         this.alertBoxError(this.title, err.error.message);
    //                         if (err.status === 401 || err.status === 403) {
    //                             this.Api.redirectToLogin();
    //                         }
    //                     }
    //                 });
    //     } else {
    //         console.log("do");
    //     }
        
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
            this.form.controls.sandiAntasena.enable();
            this.form.patchValue({
                sandiAntasena: '',
                deskripsiSandi: '',
                kodeGl: '',
                deskripsiGl: '',
                mataUang: '',
                new: true,
            });
        }

        this.openModal();
    }

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.sandiAntasena.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'pts/find-by-id?id=' + 
                data.sandiAntasena
            // tslint:disable-next-line: no-shadowed-variable
        ).subscribe(
            data => {
                const d = data.data;
                d.new = false;
                this.form?.patchValue(d);
                this.loading = false;
            },
            err => {
                if (err instanceof HttpErrorResponse) {
                    const errorMessages = new Array<{ propName: string; errors: string }>();
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
                ariaLabelledBy: 'modal-basic-title',
                size: 'sm',
                backdrop: 'static',
            })
            .result.then(
                result => {
                    this.closeResult = `${result}`;
                    if (this.closeResult == 'dodelete') {
                        console.log(data);
                        this.loading = true;
                        this.Api.post(
                            this.Api.URLServiceAntasena +
                                'pts/delete-by-id?id=' +
                                data.sandiAntasena,
                            {
                                sandiAntasena: data.sandiAntasena,
                            }
                        ).subscribe(
                            dataResult => {
                                this.loading = false;
                                this.rerender();

                                this.alertBoxSuccess(
                                    this.title,
                                    'data has been deleted successfully.'
                                );
                            },
                            err => {
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
                reason => {
                    this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
                    console.log(this.closeResult);
                }
            );
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
        // console.log(f.value.deviceId);
    }

    submit() {
        if (this.form) {
            if (this.form.valid) {
                this.loading = true;

                if (this.form.controls.sandiAntasena.disabled) {
                    this.form.controls.sandiAntasena.enable();
                }
				
                this.Api.post(
                    this.Api.URLServiceAntasena + 'pts/save', 
                    this.form.value
                ).subscribe(
                    data => {
                        console.log(data.status);
                        if (data.status) {
                            this.loading = false;
                            this.rerender();
                            this.modalService.dismissAll();
                            this.alertBoxSuccess(this.title, 'data has been saved successfully.');
                        } else {
                            this.alertBoxError(this.title, data.message);
                        }
                    },
                    err => {
                        if (err instanceof HttpErrorResponse) {
                            const errorMessages = new Array<{ propName: string; errors: string }>();
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
            pagingType: 'full_numbers',
            serverSide: true,
            processing: true,
            ajax: (dataTablesParameters: any, callback) => {
                this.Api.loadDataTable(
                    this.Api.URLServiceAntasena + 'pts/find-all',
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
            columns: [{ data: 'sandiAntasena' }, { data: 'kodeGl' }],
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
