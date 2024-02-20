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

import { AnLiabantarkantorInterface } from './../../services/an-liabantarkantor.service';

@Component({
    selector: 'sb-an-liabantarkantor',
    templateUrl: './an-liabantarkantor.component.html',
    styleUrls: ['an-liabantarkantor.component.scss'],
})
export class AnLiabantarkantorComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnLiabantarkantorInterface> | undefined;
    closeResult: string | undefined;
    title = 'Liabilitas Antar Kantor';
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
            kodeCoa: [],
            deskripsiCoa: ['', Validators.required],
            usahaKantor: ['', Validators.required],
            statusKantor: ['', Validators.required],
            negaraKantor: ['', Validators.required],
            jenisLiabilitas: ['', Validators.required],
            pendBknPend: ['', Validators.required],
            sukuBungaRp: [],
            sukuBungaVl: [],
            new: [],
        });
        this.dEdit = {
            kodeCoa: '',
            deskripsiCoa: '',
            usahaKantor: '',
            statusKantor: '',
            negaraKantor: '',
            jenisLiabilitas: '',
            pendBknPend: '',
            sukuBungaRp: '',
            sukuBungaVl: '',
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
        this.http.get(this.Api.URLServiceAntasena + 'liabilitas-antar-kantor/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Liabilitas Antar Kantor.xlsx');
            })
    }

    regenerateData() {
        if (confirm('Are you sure you want to do this?')) {
            this.Api.post(
                this.Api.URLServiceAntasena + 'liabilitas-antar-kantor/regenerate-data?namaProses=' +
                'FORM_LIABILITAS_ANTAR_KANTOR',
                {
                    namaProses: 'FORM_LIABILITAS_ANTAR_KANTOR'
                }
                ).subscribe(
                    data => {
                        if (data.status) {
                            this.modalService.dismissAll();
                            this.alertBoxSuccess(this.title, 'trigger regenerate data.');
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
                    });
        } else {
            console.log("do");
        }
        
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
        // if (this.form) {
		// 	this.dEdit = {
        //         kodeCoa: '',
        //         deskripsiCoa: '',
        //         kegiatanUsahaKantor: '',
        //         statusKantor: '',
        //         negaraKantor: '',
        //         jenisLiabilitas: '',
        //     };

        //     this.form.controls.kodeCoa.enable();

        //     if (!this.form.controls.kodeCoa) {
        //         this.form.addControl('kodeCoa', new FormControl(''));
        //     }

        //     this.form.patchValue(this.dEdit);
        //  }

        // this.openModal();

        if (this.form) {
            this.form.controls.kodeCoa.enable();
            this.form.patchValue({
                kodeCoa: '',
                deskripsiCoa: '',
                kegiatanUsahaKantor: '',
                statusKantor: '',
                negaraKantor: '',
                jenisLiabilitas: '',
                pendBknPend: '',
                sukuBungaRp: '',
                sukuBungaVl: '',
                new: true,
            });
        }

        this.openModal();
    }

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.kodeCoa.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'liabilitas-antar-kantor/find-by-id?id=' + 
                data.kodeCoa
            // tslint:disable-next-line: no-shadowed-variable
        ).subscribe(
            data => {
                // this.dEdit = data.data;
                // // d.new = false;
                // this.form?.patchValue(this.dEdit);

                // this.loading = false;
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
                                'liabilitas-antar-kantor/delete-by-id?id=' +
                                data.kodeCoa,
                            {
                                kodeCoa: data.kodeCoa,
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

                // if (this.form.controls.kodeCoa.value == '') {
                //     this.form.removeControl('kodeCoa');
                // }
                
                if (this.form.controls.kodeCoa.disabled) {
                    this.form.controls.kodeCoa.enable();
                }
                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'liabilitas-antar-kantor/save', 
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
                    this.Api.URLServiceAntasena + 'liabilitas-antar-kantor/find-all',
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
            columns: [{ data: 'kodeCoa' }],
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

