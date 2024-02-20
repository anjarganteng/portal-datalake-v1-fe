import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // action interceptor
        // sample token
        // localStorage.setItem('dataSource', this.dataSource.length);
        // const idToken =
        //    'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJwcmFzZXR5b2RoYW1hcjI3QGdtYWlsLmNvbSIsInJvbGVzIjoiQURNSU4iLCJleHAiOjE2MjQ2OTA4ODF9.MAAfDwvcKGq6OrVM9VAMF9JCHkTMUhaqQG41AzaKw-M';
        // if (idToken) {
        request = request.clone({
            headers: request.headers
                .set('key', '2c0002e4645b633c0bf609be881036a6')
                .append('Authorization', 'Bearer ' + localStorage.getItem('token')),
        });
        // }

        // console.log(request);
        return next.handle(request);
    }
}
