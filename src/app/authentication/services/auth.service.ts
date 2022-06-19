import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from '../interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl: string = environment.API_URL;
  /** Se almacena el resultado de la autenticación */
  private _auth: Auth | undefined;


  /**Getter */
  get auth(){
    return { ...this._auth} 
  }

  constructor( private http: HttpClient ) { }


  /** Obtiene los datos del usuario,
   * Recibe respuesta del backend
   */
  login() {
    return this.http.get<Auth>(`${ this.baseUrl }ajustadores/1`)
                .pipe(
                  tap( auth => this._auth = auth )
                );
  }

  logout() {
    this._auth = undefined;
  }

}
