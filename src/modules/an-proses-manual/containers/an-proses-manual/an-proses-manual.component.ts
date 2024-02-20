import { HttpErrorResponse } from '@angular/common/http';
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
import { AnProsesManualInterface } from './../../services/an-proses-manual.service';

@Component({
    selector: 'sb-an-proses-manual',
    templateUrl: './an-proses-manual.component.html',
    styleUrls: ['an-proses-manual.component.scss'],
})
export class AnProsesManualComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnProsesManualInterface> | undefined;
    closeResult: string | undefined;
    title = 'Proses Manual';
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
        public Toast: AppToastService
    ) {}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            namaProses: ['', Validators.required],
            tglProses: ['', Validators.required],
        });
        this.dEdit = {
            namaProses: '',
            tglProses: '',
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

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.namaProses.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'proses-manual/find-by-id?id=' + 
                data.namaProses
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

                if (this.form.controls.namaProses.disabled) {
                    this.form.controls.namaProses.enable();
                }
                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'proses-manual/save', 
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
                    this.Api.URLServiceAntasena + 'proses-manual/find-all',
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
            columns: [{ data: 'namaProses' }],
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
