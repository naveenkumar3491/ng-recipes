import { CanActivate, ActivatedRouteSnapshot, Router, ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../shared/auth-service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{

    constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute){}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        if(this.authService.isAuthenticated()){
            return true;
        }else{
            this.router.navigate(['/signin']);
            return false;
        }
    }
}