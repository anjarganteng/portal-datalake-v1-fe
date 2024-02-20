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
import { AnPblInterface } from './../../services/an-pbl.service';

@Component({
    selector: 'sb-an-pbl',
    templateUrl: './an-pbl.component.html',
    styleUrls: ['an-pbl.component.scss'],
})
export class AnPblComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnPblInterface> | undefined;
    closeResult: string | undefined;
    title = 'PBL';
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
            deskripsiCoa: [''],
            dalamLuarNegeri: [''],
            jenis: [''],
            sandiJenis: [''],
            branch: [''],
            wilayah: [''],
            mataUang: ['', Validators.required],
            hubDgnBank: [''],
            sandiBank: [''],
            noRekening: [''],
            mulai: ['', Validators.required],
            jatuhTempo: [''],
            klasifikasiAset: [''],
            kualitasAset: [''],
            pd: [''],
            lgd: [''],
            sukuBunga: [],
            jnsSukuBunga: [],
            new: [],
        });
        this.dEdit = {
            kodeCoa: '',
            deskripsiCoa: '',
            dalamLuarNegeri: '',
            jenis: '',
            sandiJenis: '',
            branch: '',
            wilayah: '',
            mataUang: '',
            hubDgnBank: '',
            sandiBank: '',
            noRekening: '',
            mulai: '',
            jatuhTempo: '',
            klasifikasiAset: '',
            kualitasAset: '',
            pd: '',
            lgd: '',
            sukuBunga: '',
            jnsSukuBunga: '',
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
        this.http.get(this.Api.URLServiceAntasena + 'pbl/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Pbl.xlsx');
            })
    }

    regenerateData() {
        if (confirm('Are you sure you want to do this?')) {
            this.Api.post(
            this.Api.URLServiceAntasena + 'pbl/regenerate-data?namaProses=' +
            'FORM_PENEMPATAN_BL',
            {
                namaProses: 'FORM_PENEMPATAN_BL'
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
            this.form.controls.kodeCoa.enable();
            this.form.controls.mataUang.enable();
            this.form.controls.mulai.enable();
            this.form.patchValue({
                kodeCoa: '',
                deskripsiCoa: '',
                dalamLuarNegeri: '',
                jenis: '',
                sandiJenis: '',
                branch: '',
                wilayah: '',
                mataUang: '',
                hubDgnBank: '',
                sandiBank: '',
                noRekening: '',
                mulai: '',
                jatuhTempo: '',
                klasifikasiAset: '',
                kualitasAset: '',
                pd: '',
                lgd: '',
                sukuBunga: '',
                jnsSukuBunga: '',
                new: true,
            });
        }

        this.openModal();
    }

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.kodeCoa.disable();
        this.form?.controls.mataUang.disable();
        this.form?.controls.mulai.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'pbl/find-by-id?id=' + 
                data.kodeCoa + '&id2=' + data.mataUang + '&id3=' + data.mulai
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
                                'pbl/delete-by-id?id=' +
                                data.kodeCoa + '&id2=' + data.mataUang + '&id3=' + data.mulai,
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
        //console.log(f.value.applicationName);
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

                if (this.form.controls.mataUang.disabled) {
                    this.form.controls.mataUang.enable();
                }

                if (this.form.controls.mulai.disabled) {
                    this.form.controls.mulai.enable();
                }
                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'pbl/save', 
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
                    this.Api.URLServiceAntasena + 'pbl/find-all',
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
            columns: [{ data: 'embedPbl.mulai' }],
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

