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
import { AnPpaInterface } from './../../services/an-ppa.service';

import { saveAs } from 'file-saver';

@Component({
    selector: 'sb-an-ppa',
    templateUrl: './an-ppa.component.html',
    styleUrls: ['an-ppa.component.scss'],
})
export class AnPpaComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnPpaInterface> | undefined;
    closeResult: string | undefined;
    title = 'PPA';
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
    
    dataData: any;
    data2: any;
	optionData: any;

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
            jenis: ['', Validators.required],
            sandiJenis: ['', Validators.required],
            cabang: ['', Validators.required],
            wilayah: ['', Validators.required],
            mataUang: ['', Validators.required],
            tglMulai: ['', Validators.required],
            tglJthTempo: ['', Validators.required],
            metodeUkur: ['', Validators.required],
            statusAset: ['', Validators.required],
            kualitasAset: ['', Validators.required],
            nomorAset: ['', Validators.required],
            hargaPerolehan: ['', Validators.required],
            akumulasiSusut: ['', Validators.required],
            nilaiBuku: ['', Validators.required],
            new: [],
        });
        this.dEdit = {
            kodeCoa: '',
            deskripsiCoa: '',
            jenis: '',
            sandiJenis: '',
            cabang: '',
            wilayah: '',
            mataUang: '',
            tglMulai: '',
            tglJthTempo: '',
            metodeUkur: '',
            statusAset: '',
            kualitasAset: '',
            nomorAset: '',
            hargaPerolehan: '',
            akumulasiSusut: '',
            nilaiBuku: '',
        };
		this.optionData = {
            multiple: false,
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
        this.http.get(this.Api.URLServiceAntasena + 'ppa/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Ppa.xlsx');
            })
    }

    regenerateData() {
        if (confirm('Are you sure you want to do this?')) {
            this.Api.post(
            this.Api.URLServiceAntasena + 'ppa/regenerate-data?namaProses=' +
            'FORM_PROP_TERBENGKALAI',
            {
                namaProses: 'FORM_PROP_TERBENGKALAI'
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
            console.log('do');
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
        if (this.form) {
            this.form.controls.sandiJenis.enable();
            this.form.controls.cabang.enable();
            this.form.controls.wilayah.enable();
            this.form.controls.mataUang.enable();
            this.form.controls.tglMulai.enable();
            this.form.patchValue({
                kodeCoa: '',
                deskripsiCoa: '',
                jenis: '',
                sandiJenis: '',
                cabang: '',
                wilayah: '',
                mataUang: '',
                tglMulai: '',
                tglJthTempo: '',
                metodeUkur: '',
                statusAset: '',
                kualitasAset: '',
                nomorAset: '',
                hargaPerolehan: '',
                akumulasiSusut: '',
                nilaiBuku: '',
                new: true,
            });
        }

        this.openModal();
    }

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.sandiJenis.disable();
        this.form?.controls.cabang.disable();
        this.form?.controls.wilayah.disable();
        this.form?.controls.mataUang.disable();
        this.form?.controls.tglMulai.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'ppa/find-by-id?id=' + 
                data.sandiJenis + '&id2=' + data.cabang + '&id3=' + data.wilayah + '&id4=' + data.mataUang + '&id5=' + data.tglMulai
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
                                'ppa/delete-by-id?id=' +
                                data.sandiJenis + '&id2=' + data.cabang + '&id3=' + data.wilayah + '&id4=' + data.mataUang + '&id5=' + data.tglMulai,
                            {
                                jenis: data.sandiJenis,
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
        //console.log(f.value.applicationName);
    }

    submit() {
        if (this.form) {
            if (this.form.valid) {
                this.loading = true;

                // if (this.form.controls.kodeCoa.value == '') {
                //     this.form.removeControl('kodeCoa');
                // }
                
                if (this.form.controls.sandiJenis.disabled) {
                    this.form.controls.sandiJenis.enable();
                }

                if (this.form.controls.cabang.disabled) {
                    this.form.controls.cabang.enable();
                }

                if (this.form.controls.wilayah.disabled) {
                    this.form.controls.wilayah.enable();
                }

                if (this.form.controls.mataUang.disabled) {
                    this.form.controls.mataUang.enable();
                }

                if (this.form.controls.tglMulai.disabled) {
                    this.form.controls.tglMulai.enable();
                }

                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'ppa/save', 
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
                    this.Api.URLServiceAntasena + 'ppa/find-all',
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
            columns: [{ data: 'embedPpa.tglMulai' }],
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
