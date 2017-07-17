import { Injectable, Injector } from '@angular/core';
import { Request, XHRBackend, RequestOptions, Response, Http, RequestOptionsArgs } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Router } from '@angular/router';
import { CookieService } from 'angular2-cookie/core';

// Services
import { SpinnerService } from '../appcode/project.services';

@Injectable()
export class AuthenticatedHttpService extends Http {

  token: string;
  constructor(backend: XHRBackend, defaultOptions: RequestOptions,
    private injector: Injector, private cookieService: CookieService, private spinnerService: SpinnerService) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    const token = this.getCookie('ngttoken');
    if (token) {
      if (url instanceof Request) {
        url.headers.set('Authorization', `Bearer ${token}`);
      }
    }
    this.spinnerService.startRequest();
    return super.request(url, options)
      .catch((error: Response) => {
        // tslint:disable-next-line:max-line-length
        if ((error.status === 401 || error.status === 403 || error.status === 500) && (window.location.href.match(/\?/g) || []).length < 2) {
          console.log(error);
        }
        return Observable.throw(error);
      })
      .finally(() => {
        this.spinnerService.endRequest();
      });
  }

  public get router(): Router { // this creates router property on your service.
    return this.injector.get(Router);
  }

  getCookie(key: string) {
    return this.cookieService.get(key);
  }

}
