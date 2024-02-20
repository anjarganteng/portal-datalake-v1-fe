import {
  HttpClient,
  HttpEvent,
  HttpHandler,
  HttpHeaders,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpBackend,
} from "@angular/common/http";
import { Injectable } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { Observable, of, throwError } from "rxjs";

import { DataTablesResponse } from "./../models/datatables-response";
@Injectable()
export class AppCommonService implements HttpInterceptor {
  dtOptions: DataTables.Settings = {};
  dataTableResult: any;
  // tslint:disable-next-line: ban-types

  URLServiceAntasena: String = 'https://api-dev-rs-bot-con-report.telkomsigma.dev/antasena-service/';
  // URLServiceAntasena: String =
  //  "http://dev-portal-datalake-backend.pmddev.telkomsigma.com/antasena-service/";
  // URLServiceAntasena: String =
  //   "http://portal-datalake-backend.pmddev.telkomsigma.com/antasena-service/";

  headers = { key: "2c0002e4645b633c0bf609be881036a6" };

  // constructor(private http: HttpClient, private router: Router, handler: HttpBackend, ) {
  //     // console.log('test');
  //     this.headers = {
  //         key: '2c0002e4645b633c0bf609be881036a6',
  //     };

  //     this.http = new HttpClient(handler);
  // }

  constructor(private http: HttpClient, private router: Router) {
    // console.log('test');
    this.headers = {
      key: "2c0002e4645b633c0bf609be881036a6",
    };
  }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // action interceptor
    console.log(request);
    return next.handle(request);
  }
  getAppCommon$(): Observable<{}> {
    return of({});
  }

  public loadDataTable(url: string, dataTablesParameters: any): any {
    return this.http.post<DataTablesResponse>(url, dataTablesParameters, {
      headers: new HttpHeaders(this.headers),
    });
  }

  public post(url: string, body: any) {
    return this.http.post<any>(url, body, {
      headers: new HttpHeaders(this.headers),
    });
  }

  public get(url: string) {
    return this.http.get<any>(url, { headers: new HttpHeaders(this.headers) });
  }

  public redirectToLogin() {
    alert("Your session has expired. Please log in.");
    // return false;

    const myurl = '/auth/login';
    console.log('must be login');
    this.router.navigateByUrl(myurl).then(e => {
        if (e) {
            console.log('Navigation is successful!');
        } else {
            console.log('Navigation has failed!');
        }
    });
  }

  handleError(error: { error: { message: any }; status: any; message: any }) {
    let errorMessage = "";
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
