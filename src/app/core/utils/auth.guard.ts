import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthenService } from "../services/authen.service";

@Injectable({
    providedIn: 'root',
})
export class AuthGuard implements CanActivate {
    constructor( private router: Router, private auth: AuthenService ) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (this.auth.isTokenValid()) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: {returnUrl: state.url} });
        return false;
    }
}