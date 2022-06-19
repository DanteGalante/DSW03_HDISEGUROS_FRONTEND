import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanLoad {

  constructor( private authService: AuthService,
              private router: Router ) {

  }

  /**
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
   */
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | boolean {

      return this.authService.verificaAutenticacion()
      .pipe(
        tap( estaAutenticado => {
          if( !estaAutenticado) {
            this.router.navigate(['/auth/login']);
          }
        } )
      )
      
/**
 * /** Si encuentra un id de usuario 
 if( this.authService.auth.idUsuario ){
  return true;
}

console.log('Bloqueado por AuthGuard')
return false;
 */
      
  }
}
