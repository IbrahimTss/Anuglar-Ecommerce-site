import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import {catchError, finalize} from 'rxjs/operators'
import { LoaderService } from "../Services/loader.service";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor(public loaderService: LoaderService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.loaderService.isLoading.next(true);
    req = req.clone({
      setHeaders: {
        'x-rapidapi-key': '7393ec52a3mshb14fe7279160360p19eab9jsn6bd5685f911b',
        'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com',
      },
      setParams: {
        key: '6b13d7814bed4c19a13334c9c9deb0a1',
      }
    });
    return next.handle(req).pipe(
     
      catchError((error: HttpErrorResponse) => {
        console.log('httperror', error);
        return throwError(error.error);
      }),
      finalize(() => {
        this.loaderService.isLoading.next(false);
      })
    );
  }
}