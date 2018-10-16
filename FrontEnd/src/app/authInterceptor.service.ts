import { Injectable, Injector } from '@angular/core';
import { HttpInterceptor } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor(private injector: Injector) { }

    intercept(req, next) {

        // tslint:disable-next-line:prefer-const
        let auth = this.injector.get(AuthService);
        // tslint:disable-next-line:prefer-const
        let authRequest = req.clone({
            headers: req.headers.set('Authorization', 'token ' + auth.token)
        });
        return next.handle(authRequest);
    }
}
