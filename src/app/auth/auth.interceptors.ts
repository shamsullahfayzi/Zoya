import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Router } from "@angular/router";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
@Injectable()
export class authIntercepor implements HttpInterceptor {
    constructor(private router: Router, private Snack: MatSnackBar) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('token') != null) {
            const clonedRequest = req.clone({
                headers: req.headers.set("Authorization", `Bearer ${localStorage.getItem('token')}`)
            })
            return next.handle(clonedRequest).pipe(tap(succ => succ, err => {
                if (err.status == 401) {
                    localStorage.removeItem('token')
                    this.router.navigateByUrl("/login");
                }
                if (err.status == 403) {

                    this.Snack.open("You Do Not Have Access to this Page", "Close")
                    setTimeout(() => {
                        this.router.navigateByUrl('/home');
                    }, 2000);
                }
            }))
        }
        else return next.handle(req.clone())
    }

}