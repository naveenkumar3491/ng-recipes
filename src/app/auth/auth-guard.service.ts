import { CanActivate, ActivatedRouteSnapshot, Router, ActivatedRoute, RouterStateSnapshot, CanLoad, Route } from '@angular/router';
import { AuthService } from '../shared/auth-service';
import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad{

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/signin']);
            return false;
        }
    }

    canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean{
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/signin']);
            return false;
        }
    }
}