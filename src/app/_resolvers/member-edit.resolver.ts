import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { User } from '../_models/User';
import { Injectable } from '@angular/core';
import { UserService } from '../_services/user.service';
import { AlertifyService } from '../_services/alertify.service';
import { AuthService } from '../_services/auth.service';
import { Observable, of } from 'rxjs/';
import { catchError } from 'rxjs/operators';


@Injectable()
export class MemberEditlResolver implements Resolve<User> {
    constructor(private userService: UserService,
        private router: Router, private alertify: AlertifyService,
        private authService: AuthService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<User> {
            return this.userService.getUser(this.authService.decodedToken.nameid)
            .pipe (
                catchError(error => {
                    this.alertify.error('Problem retrieving data');
                    this.router.navigate(['/members']);
                    return of(null);
                })
            );
        }
}
