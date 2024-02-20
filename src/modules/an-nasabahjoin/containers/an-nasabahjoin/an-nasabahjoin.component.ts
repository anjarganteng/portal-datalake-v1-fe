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

import { AnNasabahjoinInterface } from './../../services/an-nasabahjoin.service';

@Component({
    selector: 'sb-an-nasabahjoin',
    templateUrl: './an-nasabahjoin.component.html',
    styleUrls: ['an-nasabahjoin.component.scss'],
})
export class AnNasabahjoinComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnNasabahjoinInterface> | undefined;
    closeResult: string | undefined;
    title = 'Nasabahjoin';
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
            cif: [],
            cifJoin: [''],
            flagNasabah: [''],
            flagJoin: [''],
            tipeCif: [''],
            nmLnkpNsb: [''],
            noNpwp: [''],
            jnsIdentitas: [''],
            noIdentitas: [''],
            nmIbuKdg: [''],
            tmpLahir: [''],
            tglLahir: [''],
            noSiup: [''],
            nmLnkpPemegangKuasa: [''],
            jnsIdentitasPemegangKuasa: [''],
            noIdentitasPemegangKuasa: [''],
            alamat: [''],
            kabKota: [''],
            kewarnegaraan: [''],
            noTelp: [''],
            flagFraud: [''],
            hubDgnBank: [''],
            golNsb: [''],
            kategoriUsaha: [''],
            new: [],
        });
        this.dEdit = {
            cif: '',
            cifJoin: '',
            flagNasabah: '',
            flagJoin: '',
            tipeCif: '',
            nmLnkpNsb: '',
            noNpwp: '',
            jnsIdentitas: '',
            noIdentitas: '',
            nmIbuKdg: '',
            tmpLahir: '',
            tglLahir: '',
            noSiup: '',
            nmLnkpPemegangKuasa: '',
            jnsIdentitasPemegangKuasa: '',
            noIdentitasPemegangKuasa: '',
            alamat: '',
            kabKota: '',
            kewarnegaraan: '',
            noTelp: '',
            flagFraud: '',
            hubDgnBank: '',
            golNsb: '',
            kategoriUsaha: '',
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
        this.http.get(this.Api.URLServiceAntasena + 'nasabahjoin/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Nasabahjoin.xlsx');
            })
    }

    // regenerateData() {
    //     if (confirm('Are you sure you want to do this?')) {
    //         this.Api.post(
    //         this.Api.URLServiceAntasena + 'pihak-lawan/regenerate-data?namaProses=' +
    //         'FORM_PIHAK_LAWAN',
    //         {
    //             namaProses: 'FORM_PIHAK_LAWAN'
    //         }
    //         ).subscribe(
    //             data => {
    //                 if (data.status) {
    //                     this.modalService.dismissAll();
    //                     this.alertBoxSuccess(this.title, 'trigger regenerate data.');
    //                 } else {
    //                     this.alertBoxError(this.title, data.message);
    //                 }
    //             },
    //             err => {
    //                 if (err instanceof HttpErrorResponse) {
    //                     const errorMessages = new Array<{ propName: string; errors: string }>();
    //                     this.loading = false;
    //                     this.modalService.dismissAll();
    //                     this.alertBoxError(this.title, err.error.message);
    //                     if (err.status === 401 || err.status === 403) {
    //                         this.Api.redirectToLogin();
    //                     }
    //                 }
    //             });
    //     } else {
    //         console.log('do');
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

    anotherReset() {
        this.ngOnInit();
    }

    selectTipeCif(event: any) {
        let selected = event.target.value;
        if (selected == "I") {

            this.form?.controls.noNpwp.enable();
            this.form?.controls.nmLnkpNsb.enable();
            this.form?.controls.jnsIdentitas.enable();
            this.form?.controls.jnsIdentitasPemegangKuasa.enable();
            this.form?.controls.noIdentitas.enable();
            this.form?.controls.nmIbuKdg.enable();
            this.form?.controls.tmpLahir.enable();
            this.form?.controls.tglLahir.enable();
            this.form?.controls.nmLnkpPemegangKuasa.enable();
            this.form?.controls.noIdentitasPemegangKuasa.enable();
            this.form?.controls.alamat.enable();
            this.form?.controls.kabKota.enable();
            this.form?.controls.kewarnegaraan.enable();
            this.form?.controls.noTelp.enable();
            this.form?.controls.flagFraud.enable();
            this.form?.controls.hubDgnBank.enable();
            this.form?.controls.golNsb.enable();
            this.form?.controls.kategoriUsaha.enable();
            this.form?.controls.noSiup.enable();
            this.form?.controls.tipeCif.enable();

            this.form?.controls.nmLnkpPemegangKuasa.disable();
            this.form?.controls.jnsIdentitasPemegangKuasa.disable();
            this.form?.controls.noIdentitasPemegangKuasa.disable();
        } else if (selected == "C") {

            this.form?.controls.noNpwp.enable();
            this.form?.controls.nmLnkpNsb.enable();
            this.form?.controls.jnsIdentitas.enable();
            this.form?.controls.jnsIdentitasPemegangKuasa.enable();
            this.form?.controls.noIdentitas.enable();
            this.form?.controls.nmIbuKdg.enable();
            this.form?.controls.tmpLahir.enable();
            this.form?.controls.tglLahir.enable();
            this.form?.controls.nmLnkpPemegangKuasa.enable();
            this.form?.controls.noIdentitasPemegangKuasa.enable();
            this.form?.controls.alamat.enable();
            this.form?.controls.kabKota.enable();
            this.form?.controls.kewarnegaraan.enable();
            this.form?.controls.noTelp.enable();
            this.form?.controls.flagFraud.enable();
            this.form?.controls.hubDgnBank.enable();
            this.form?.controls.golNsb.enable();
            this.form?.controls.kategoriUsaha.enable();
            this.form?.controls.noSiup.enable();
            this.form?.controls.tipeCif.enable();

            this.form?.controls.jnsIdentitas.disable();
            this.form?.controls.noIdentitas.disable();
            this.form?.controls.nmIbuKdg.disable();
            this.form?.controls.tmpLahir.disable();
            this.form?.controls.kewarnegaraan.disable();
            this.form?.controls.tglLahir.disable();
        } else {
            console.log("a");
        }
    }

    selectInput(event: any) {
        let selected = event.target.value;
        
        if (selected == "1") {

            this.form?.controls.tipeCif.reset();
            this.form?.controls.noNpwp.reset();
            this.form?.controls.nmLnkpNsb.reset();
            this.form?.controls.jnsIdentitas.reset();
            this.form?.controls.jnsIdentitasPemegangKuasa.reset();
            this.form?.controls.noIdentitas.reset();
            this.form?.controls.nmIbuKdg.reset();
            this.form?.controls.tmpLahir.reset();
            this.form?.controls.tglLahir.reset();
            this.form?.controls.nmLnkpPemegangKuasa.reset();
            this.form?.controls.noIdentitasPemegangKuasa.reset();
            this.form?.controls.alamat.reset();
            this.form?.controls.kabKota.reset();
            this.form?.controls.kewarnegaraan.reset();
            this.form?.controls.noTelp.reset();
            this.form?.controls.flagFraud.reset();
            this.form?.controls.hubDgnBank.reset();
            this.form?.controls.golNsb.reset();
            this.form?.controls.kategoriUsaha.reset();
            this.form?.controls.noSiup.reset();

            this.form?.controls.noNpwp.enable();
            this.form?.controls.nmLnkpNsb.enable();
            this.form?.controls.jnsIdentitas.enable();
            this.form?.controls.jnsIdentitasPemegangKuasa.enable();
            this.form?.controls.noIdentitas.enable();
            this.form?.controls.nmIbuKdg.enable();
            this.form?.controls.tmpLahir.enable();
            this.form?.controls.tglLahir.enable();
            this.form?.controls.nmLnkpPemegangKuasa.enable();
            this.form?.controls.noIdentitasPemegangKuasa.enable();
            this.form?.controls.alamat.enable();
            this.form?.controls.kabKota.enable();
            this.form?.controls.kewarnegaraan.enable();
            this.form?.controls.noTelp.enable();
            this.form?.controls.flagFraud.enable();
            this.form?.controls.hubDgnBank.enable();
            this.form?.controls.golNsb.enable();
            this.form?.controls.kategoriUsaha.enable();
            this.form?.controls.noSiup.enable();
            this.form?.controls.tipeCif.enable();

            this.form?.controls.noNpwp.disable();
            this.form?.controls.nmLnkpNsb.disable();
            this.form?.controls.jnsIdentitas.disable();
            this.form?.controls.jnsIdentitasPemegangKuasa.disable();
            this.form?.controls.noIdentitas.disable();
            this.form?.controls.nmIbuKdg.disable();
            this.form?.controls.tmpLahir.disable();
            this.form?.controls.tglLahir.disable();
            this.form?.controls.nmLnkpPemegangKuasa.disable();
            this.form?.controls.noIdentitasPemegangKuasa.disable();
            this.form?.controls.alamat.disable();
            this.form?.controls.kabKota.disable();
            this.form?.controls.kewarnegaraan.disable();
            this.form?.controls.noTelp.disable();
            this.form?.controls.flagFraud.disable();
            this.form?.controls.hubDgnBank.disable();
            this.form?.controls.golNsb.disable();
            this.form?.controls.kategoriUsaha.disable();
            this.form?.controls.noSiup.disable();
            this.form?.controls.tipeCif.disable();
        } else if (selected == "0") {

            this.form?.controls.tipeCif.reset();
            this.form?.controls.noNpwp.reset();
            this.form?.controls.nmLnkpNsb.reset();
            this.form?.controls.jnsIdentitas.reset();
            this.form?.controls.jnsIdentitasPemegangKuasa.reset();
            this.form?.controls.noIdentitas.reset();
            this.form?.controls.nmIbuKdg.reset();
            this.form?.controls.tmpLahir.reset();
            this.form?.controls.tglLahir.reset();
            this.form?.controls.nmLnkpPemegangKuasa.reset();
            this.form?.controls.noIdentitasPemegangKuasa.reset();
            this.form?.controls.alamat.reset();
            this.form?.controls.kabKota.reset();
            this.form?.controls.kewarnegaraan.reset();
            this.form?.controls.noTelp.reset();
            this.form?.controls.flagFraud.reset();
            this.form?.controls.hubDgnBank.reset();
            this.form?.controls.golNsb.reset();
            this.form?.controls.kategoriUsaha.reset();
            this.form?.controls.noSiup.reset();

            this.form?.controls.noNpwp.enable();
            this.form?.controls.nmLnkpNsb.enable();
            this.form?.controls.jnsIdentitas.enable();
            this.form?.controls.jnsIdentitasPemegangKuasa.enable();
            this.form?.controls.noIdentitas.enable();
            this.form?.controls.nmIbuKdg.enable();
            this.form?.controls.tmpLahir.enable();
            this.form?.controls.tglLahir.enable();
            this.form?.controls.nmLnkpPemegangKuasa.enable();
            this.form?.controls.noIdentitasPemegangKuasa.enable();
            this.form?.controls.alamat.enable();
            this.form?.controls.kabKota.enable();
            this.form?.controls.kewarnegaraan.enable();
            this.form?.controls.noTelp.enable();
            this.form?.controls.flagFraud.enable();
            this.form?.controls.hubDgnBank.enable();
            this.form?.controls.golNsb.enable();
            this.form?.controls.kategoriUsaha.enable();
            this.form?.controls.noSiup.enable();
            this.form?.controls.tipeCif.enable();
        } else {
            console.log("a");
        }
    }
    
    showAdd() {
        if (this.form) {
            this.form.controls.cif.enable();

            this.form.patchValue({
                cif: '',
                cifJoin: '',
                flagNasabah: '',
                flagJoin: '',
                tipeCif: '',
                nmLnkpNsb: '',
                noNpwp: '',
                jnsIdentitas: '',
                noIdentitas: '',
                nmIbuKdg: '',
                tmpLahir: '',
                tglLahir: '',
                noSiup: '',
                nmLnkpPemegangKuasa: '',
                jnsIdentitasPemegangKuasa: '',
                noIdentitasPemegangKuasa: '',
                alamat: '',
                kabKota: '',
                kewarnegaraan: '',
                noTelp: '',
                flagFraud: '',
                hubDgnBank: '',
                golNsb: '',
                kategoriUsaha: '',
                new: true,
            });
        }

        this.openModal();
    }

    showEdit(data: any) {
        this.openModal();
        this.loading = true;
        this.form?.controls.cif.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'nasabahjoin/find-by-id?id=' + 
                data.cif
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
                                'nasabahjoin/delete-by-id?id=' +
                                data.cif,
                            {
                                cif: data.cif,
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
                
                if (this.form.controls.cif.disabled) {
                    this.form.controls.cif.enable();
                }
                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'nasabahjoin/save', 
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
                    this.Api.URLServiceAntasena + 'nasabahjoin/find-all',
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
            columns: [{ data: 'cif' }],
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

