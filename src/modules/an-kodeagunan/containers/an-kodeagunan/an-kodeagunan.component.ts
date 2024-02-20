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
import { AnKodeagunanInterface } from './../../services/an-kodeagunan.service';

@Component({
    selector: 'sb-an-kodeagunan',
    templateUrl: './an-kodeagunan.component.html',
    styleUrls: ['an-kodeagunan.component.scss'],
})
export class AnKodeagunanComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnKodeagunanInterface> | undefined;
    closeResult: string | undefined;
    title = 'Collateral Persentase';
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
            no: ['', Validators.required],
            kodeAgunanCore: ['', Validators.required],
            kodeAgunanAntasena: ['', Validators.required],
            kodeAgunanLps: ['', Validators.required],
            kodeAgunanSlik: ['', Validators.required],
            keterangan: ['', Validators.required],
            nilaiPersentase: ['', Validators.required],
            jw1: ['', Validators.required],
            persen1: ['', Validators.required],
            jw2: ['', Validators.required],
            persen2: ['', Validators.required],
            jw3: ['', Validators.required],
            persen3: ['', Validators.required],
            jw4: ['', Validators.required],
            persen4: ['', Validators.required],
            jw5: ['', Validators.required],
            persen5: ['', Validators.required],
            jw6: ['', Validators.required],
            persen6: ['', Validators.required],
            jw7: ['', Validators.required],
            persen7: ['', Validators.required],
            new: [],
        });
        this.dEdit = {
            no: '',
            kodeAgunanCore: '',
            kodeAgunanAntasena: '',
            kodeAgunanLps: '',
            kodeAgunanSlik: '',
            keterangan: '',
            nilaiPersentase: '',
            jw1: '',
            persen1: '',
            jw2: '',
            persen2: '',
            jw3: '',
            persen3: '',
            jw4: '',
            persen4: '',
            jw5: '',
            persen5: '',
            jw6: '',
            persen6: '',
            jw7: '',
            persen7: '',
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
        this.http.get(this.Api.URLServiceAntasena + 'kode-agunan/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Kode Agunan.xlsx');
            })
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
            this.form.controls.no.enable();
            this.form.controls.kodeAgunanCore.enable();
            this.form.controls.kodeAgunanAntasena.enable();
            this.form.controls.kodeAgunanSlik.enable();
            this.form.controls.kodeAgunanLps.enable();
            this.form.patchValue({
                no: '',
                kodeAgunanCore: '',
                kodeAgunanAntasena: '',
                kodeAgunanLps: '',
                kodeAgunanSlik: '',
                keterangan: '',
                nilaiPersentase: '',
                jw1: '',
                persen1: '',
                jw2: '',
                persen2: '',
                jw3: '',
                persen3: '',
                jw4: '',
                persen4: '',
                jw5: '',
                persen5: '',
                jw6: '',
                persen6: '',
                jw7: '',
                persen7: '',
                new: true,
            });
        }

        this.openModal();
    }

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.no.disable();
        this.form?.controls.kodeAgunanCore.disable();
        this.form?.controls.kodeAgunanAntasena.disable();
        this.form?.controls.kodeAgunanSlik.disable();
        this.form?.controls.kodeAgunanLps.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'kode-agunan/find-by-id?id=' + 
                data.kodeAgunanCore
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
                                'kode-agunan/delete-by-id?id=' +
                                data.kodeAgunanCore,
                            {
                                kodeAgunanCore: data.kodeAgunanCore,
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
                
                if (this.form.controls.no.disabled) {
                    this.form.controls.no.enable();
                }

                if (this.form.controls.kodeAgunanCore.disabled) {
                    this.form.controls.kodeAgunanCore.enable();
                }

                if (this.form.controls.kodeAgunanAntasena.disabled) {
                    this.form.controls.kodeAgunanAntasena.enable();
                }

                if (this.form.controls.kodeAgunanSlik.disabled) {
                    this.form.controls.kodeAgunanSlik.enable();
                }

                if (this.form.controls.kodeAgunanLps.disabled) {
                    this.form.controls.kodeAgunanLps.enable();
                }
                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'kode-agunan/save', 
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
                    this.Api.URLServiceAntasena + 'kode-agunan/find-all',
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
            columns: [{ data: 'kodeAgunanCore' }],
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


