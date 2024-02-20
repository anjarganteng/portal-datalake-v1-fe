import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppCommonService, AppToastService } from '@common/services';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'sb-login',
    // changeDetection: ChangeDetectionStrategy.OnPush,
    templateUrl: './login.component.html',
    styleUrls: ['login.component.scss'],
})
export class LoginComponent implements OnInit {
    form: FormGroup | undefined;
    closeResult: string | undefined;
    title = 'Login';
    loading = false;

    alertSuccess = false;
    alertError = false;
    alertInfo = false;
    alertTitle = '';
    alertContent = '';

    modalReference: any;

    constructor(
        private formBuilder: FormBuilder,
        private modalService: NgbModal,
        private Api: AppCommonService,
        public Toast: AppToastService,
        private router: Router
    ) {}
    ngOnInit() {
        this.form = this.formBuilder.group({
            email: ['', Validators.required],
            password: ['', Validators.required],
        });
        localStorage.setItem('token', 'x');
    }

    submit() {
        
        if (this.form) {
            if (this.form.valid) {
                this.loading = true;
                // console.log(this.form.value);
                // const idToken =
                //    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmFzZXR5b2RoYW1hcjI3QGdtYWlsLmNvbSIsInJvbGVzIjoiQURNSU4iLCJleHAiOjE2MjQ2OTA4ODF9.MAAfDwvcKGq6OrVM9VAMF9JCHkTMUhaqQG41AzaKw-M';
                // localStorage.setItem('token', idToken);
                this.Api.post(
                    this.Api.URLServiceAntasena + 'application-users/login',
                    this.form.value
                ).subscribe(
                    data => {
                        // console.log();
                        window.localStorage.clear();
                        
                        
                        localStorage.setItem('token', data.data.jwt);
                        localStorage.setItem('email', JSON.stringify(data.data.email));
                        // const myurl = '/an-application-users';
                        const myurl = '/welcome-page';
                        console.log('must be login');
                        this.router.navigateByUrl(myurl).then(e => {
                            if (e) {
                                console.log('Navigation is successful!');
                                window.location.reload();
                            } else {
                                console.log('Navigation has failed!');
                            }
                        });

                        if (data.status) {
                            this.loading = false;
                            this.modalService.dismissAll();
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

                // if (this.form.value.email === 'admin' && this.form.value.password === 'admin') {
                //     console.log();
                //     const idToken =
                //         'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmFzZXR5b2RoYW1hcjI3QGdtYWlsLmNvbSIsInJvbGVzIjoiQURNSU4iLCJleHAiOjE2MjQ2OTA4ODF9.MAAfDwvcKGq6OrVM9VAMF9JCHkTMUhaqQG41AzaKw-M';
                //     localStorage.setItem('token', idToken);
                //     const myurl = '/dashboard';
                //     console.log('must be login');
                //     this.router.navigateByUrl(myurl).then(e => {
                //         if (e) {
                //             console.log('Navigation is successful!');
                //         } else {
                //             console.log('Navigation has failed!');
                //         }
                //     });
                // } else {
                //     console.log('salah');
                // }

                // this.form.patchValue({
                //                  username: '',
                //                  password: ''
                //      });
                // this.Api.post(this.Api.URLService + 'bo-users/login', this.form.value).subscribe(
                //     data => {
                //         console.log(data.status);
                //         if (data.status) {
                //             this.loading = false;
                //             //this.rerender();
                //             this.modalService.dismissAll();
                //             this.alertBoxSuccess(this.title, 'data has been saved successfully.');
                //         } else {
                //             this.alertBoxError(this.title, data.message);
                //         }
                //     },
                //     err => {
                //         this.form.patchValue({
                //             username: '',
                //             password: ''
                //         });
                //         if (err instanceof HttpErrorResponse) {
                //           this.alertBoxError(this.title, err.message);
                //         }
                //     }
                // );
            }
        }
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

