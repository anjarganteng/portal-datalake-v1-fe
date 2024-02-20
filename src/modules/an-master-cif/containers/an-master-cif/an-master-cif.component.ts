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
import { AnMasterCifInterface } from './../../services/an-master-cif.service';

@Component({
    selector: 'sb-an-master-cif',
    templateUrl: './an-master-cif.component.html',
    styleUrls: ['an-master-cif.component.scss'],
})
export class AnMasterCifComponent implements  AfterViewInit, OnDestroy, OnInit {
   form: FormGroup | undefined;
    ModelInterface: Observable<AnMasterCifInterface> | undefined;
    closeResult: string | undefined;
    title = 'Master CIF';
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
    dataDataData: any;
    dataKtp: any;
    
    constructor(
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private Api: AppCommonService,
        public Toast: AppToastService,
        public http: HttpClient,
    ) {}
    ngOnInit(): void {
        this.form = this.formBuilder.group({
            cif: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
            nmLnkpNsb: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]],
            tipeNasabah: ['', Validators.required],
            noNpwp: ['', Validators.pattern("^[a-zA-Z0-9]*$")],
            jnsIdentitas: ['', Validators.required],
            noIdentitas: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
            nmIbuKdg: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]],
            tmpLahir: ['', Validators.required],
            tglLahir: ['', Validators.required],
            noSiup: ['', Validators.pattern("^[a-zA-Z0-9]*$")],
            nmLnkpPemegangKuasa: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9 ]*$")]],
            jnsIdentitasPemegangKuasa: ['', Validators.required],
            noIdentitasPemegangKuasa: ['', [Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]],
            alamat: ['', Validators.pattern("^[a-zA-Z0-9., ]*$")],
            kabKota: ['', Validators.required],
            kewarnegaraan: ['', Validators.required],
            noTelp: ['', Validators.pattern("^[a-zA-Z0-9]*$")],
            flagFraud: ['', Validators.required, ],
            hubDgnBank: ['', Validators.required],
            golNsb: ['', Validators.required],
            kategoriUsaha: ['', Validators.required],
            new: [true],
        });
        this.dEdit = {
            cif: '',
            nmLnkpNsb: '',
            tipeNasabah: '',
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

    getSandi() {
        this.Api.get(
          this.Api.URLServiceAntasena + "sandi/get-all?tipe_sandi=02"
        ).subscribe(
          (dataResult) => {
            this.dataData = dataResult.data;
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

    getKabKota() {
        this.Api.get(
          this.Api.URLServiceAntasena + "sandi/get-all?tipe_sandi=01"
        ).subscribe(
          (dataResult) => {
            this.dataDataData = dataResult.data;
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

    eventCheck(event: any) {
        let selected = event.target.value;

        if (selected === "KTP") {
            this.form?.controls.noIdentitas.setValidators([Validators.minLength(16), Validators.maxLength(16)]);
            this.form?.controls.noIdentitas.updateValueAndValidity();
        } else {
            this.form?.controls.noIdentitas.clearValidators();
            this.form?.controls.noIdentitas.setValidators([Validators.required, Validators.pattern("^[a-zA-Z0-9]*$")]);
            this.form?.controls.noIdentitas.updateValueAndValidity();
        }
    }

    checkKtp(event: any) {
        let selected = event.target.value;
        
        this.Api.get(
            this.Api.URLServiceAntasena + "master-cif/no-identitas?noKtp=" + selected
        ).subscribe(
            (dataResult) => {
                this.dataKtp = dataResult.data;
                this.loading = false;

                if (this.dataKtp) {
                    alert("KTP number you entered is already registered");
                }
            });

            
    }

    getExcelData() {
        this.http.get(this.Api.URLServiceAntasena + 'master-cif/download', { responseType: 'blob' })
            .subscribe((res: any) => {
                saveAs(res, 'Master Cif.xlsx');
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

    anotherResets() {
        this.form?.enable();
        this.ngOnInit();
    }

    anotherReset() {
        this.ngOnInit();
    }

    resetReset() {
        this.form?.enable();
        this.form?.reset();
        this.ngOnInit;
    }

    selectNoIdentitas(event: any) {
        let selected = event.target.value;
    }

    selectTipeNasabah(event: any) {
        let selected = event.target.value;
        if (selected == "I") {
            
            this.form?.controls.nmLnkpNsb.enable();
            this.form?.controls.jnsIdentitas.enable();
            this.form?.controls.jnsIdentitasPemegangKuasa.enable();
            this.form?.controls.noIdentitas.enable();
            this.form?.controls.nmIbuKdg.enable();
            this.form?.controls.tmpLahir.enable();
            this.form?.controls.tglLahir.enable();
            this.form?.controls.nmLnkpPemegangKuasa.enable();
            this.form?.controls.noIdentitasPemegangKuasa.enable();
            this.form?.controls.kabKota.enable();
            this.form?.controls.kewarnegaraan.enable();
            this.form?.controls.flagFraud.enable();
            this.form?.controls.hubDgnBank.enable();
            this.form?.controls.golNsb.enable();
            this.form?.controls.kategoriUsaha.enable();
            this.form?.controls.tipeNasabah.enable();
            
            // kolom optional (boleh kosong)
            this.form?.controls.noNpwp.enable();
            this.form?.controls.alamat.enable();
            this.form?.controls.noTelp.enable();
            this.form?.controls.noSiup.enable();

            this.form?.controls.nmLnkpPemegangKuasa.disable();
            this.form?.controls.jnsIdentitasPemegangKuasa.disable();
            this.form?.controls.noIdentitasPemegangKuasa.disable();

            // hilangkan validasinya karna harus kosong
            this.form?.controls.nmLnkpPemegangKuasa.clearValidators();
            this.form?.controls.jnsIdentitasPemegangKuasa.clearValidators();
            this.form?.controls.noIdentitasPemegangKuasa.clearValidators();

            this.form?.controls.nmLnkpPemegangKuasa.reset();
            this.form?.controls.jnsIdentitasPemegangKuasa.reset();
            this.form?.controls.noIdentitasPemegangKuasa.reset();
        } else if (selected == "C") {

            this.form?.controls.nmLnkpNsb.enable();
            this.form?.controls.jnsIdentitas.enable();
            this.form?.controls.jnsIdentitasPemegangKuasa.enable();
            this.form?.controls.noIdentitas.enable();
            this.form?.controls.nmIbuKdg.enable();
            this.form?.controls.tmpLahir.enable();
            this.form?.controls.tglLahir.enable();
            this.form?.controls.nmLnkpPemegangKuasa.enable();
            this.form?.controls.noIdentitasPemegangKuasa.enable();
            this.form?.controls.kabKota.enable();
            this.form?.controls.kewarnegaraan.enable();
            this.form?.controls.flagFraud.enable();
            this.form?.controls.hubDgnBank.enable();
            this.form?.controls.golNsb.enable();
            this.form?.controls.kategoriUsaha.enable();
            this.form?.controls.tipeNasabah.enable();

            // kolom optional (boleh kosong)
            this.form?.controls.noNpwp.enable();
            this.form?.controls.alamat.enable();
            this.form?.controls.noTelp.enable();
            this.form?.controls.noSiup.enable();

            this.form?.controls.jnsIdentitas.disable();
            this.form?.controls.noIdentitas.disable();
            this.form?.controls.nmIbuKdg.disable();
            this.form?.controls.tmpLahir.disable();
            this.form?.controls.kewarnegaraan.disable();
            this.form?.controls.tglLahir.disable();

            // hilangkan validasinya karna harus kosong
            this.form?.controls.jnsIdentitas.clearValidators();
            this.form?.controls.noIdentitas.clearValidators();
            this.form?.controls.nmIbuKdg.clearValidators();
            this.form?.controls.tmpLahir.clearValidators();
            this.form?.controls.kewarnegaraan.clearValidators();
            this.form?.controls.tglLahir.clearValidators();

            this.form?.controls.jnsIdentitas.reset();
            this.form?.controls.noIdentitas.reset();
            this.form?.controls.nmIbuKdg.reset();
            this.form?.controls.tmpLahir.reset();
            this.form?.controls.kewarnegaraan.reset();
            this.form?.controls.tglLahir.reset();
        } else {
            console.log("a");
        }
    }

    selectTipeNasabahEdit(event: any) {
        let selected = event;
        if (selected == "I") {
            
            this.form?.controls.tipeNasabah.disable();
            this.form?.controls.nmLnkpPemegangKuasa.disable();
            this.form?.controls.jnsIdentitasPemegangKuasa.disable();
            this.form?.controls.noIdentitasPemegangKuasa.disable();

            // hilangkan validasinya karna harus kosong
            this.form?.controls.nmLnkpPemegangKuasa.clearValidators();
            this.form?.controls.jnsIdentitasPemegangKuasa.clearValidators();
            this.form?.controls.noIdentitasPemegangKuasa.clearValidators();

        } else if (selected == "C") {

            this.form?.controls.tipeNasabah.disable();
            this.form?.controls.jnsIdentitas.disable();
            this.form?.controls.noIdentitas.disable();
            this.form?.controls.nmIbuKdg.disable();
            this.form?.controls.tmpLahir.disable();
            this.form?.controls.kewarnegaraan.disable();
            this.form?.controls.tglLahir.disable();

            // hilangkan validasinya karna harus kosong
            this.form?.controls.jnsIdentitas.clearValidators();
            this.form?.controls.noIdentitas.clearValidators();
            this.form?.controls.nmIbuKdg.clearValidators();
            this.form?.controls.tmpLahir.clearValidators();
            this.form?.controls.kewarnegaraan.clearValidators();
            this.form?.controls.tglLahir.clearValidators();
        } else {
            console.log("a");
        }
    }

    showAdd() {
        if (this.form) {
            this.form.controls.cif.enable();
            this.getSandi();
            this.getKabKota();

            this.form.patchValue({
                cif: '',
                nmLnkpNsb: '',
                tipeNasabah: '',
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
                flagFraud: "1",
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
        this.getSandi();
        this.getKabKota();

        this.form?.controls.cif.disable();
        this.Api.get(
            this.Api.URLServiceAntasena + 
                'master-cif/find-by-id?id=' + 
                data.cif
            // tslint:disable-next-line: no-shadowed-variable
        ).subscribe(
            data => {
                const d = data.data;
                d.new = false;
                this.selectTipeNasabahEdit(d.tipeNasabah);
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
                                'master-cif/delete-by-id?id=' +
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

                if (this.form.controls.tipeNasabah.disabled) {
                    this.form.controls.tipeNasabah.enable();
                }
                
                this.Api.post(
                    this.Api.URLServiceAntasena + 'master-cif/save', 
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
                    this.Api.URLServiceAntasena + 'master-cif/find-all',
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
            columns: [{ data: 'cif' }, { data: 'noIdentitas' }],
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


