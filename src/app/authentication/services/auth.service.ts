import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Auth } from 'src/app/authentication/interfaces/auth.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl: string = environment.API_URL;
  /** Se almacena el resultado de la autenticación */
  private _auth: Auth | undefined;
  private idRuta: string | undefined;


  /**Getter */
  get auth(){
    return { ...this._auth} 
  }

  constructor( private http: HttpClient ) { }

  /** Verifica que el usuario está autenticado, al validar si hay un id de 
   * usuario almacenado localmente después de iniciar sesión */
  verificaAutenticacion(): Observable<boolean> {
    if( !localStorage.getItem('idUsuario') ){
      return of(false);
    }

    return this.http.get<Auth>(`${ this.baseUrl }usuarios/${this.idRuta}`)
            .pipe(
              map(auth => {
                /** Se guarda la información del usuario autenticado */
                this._auth = auth;
                return true;
              })
            );
  }


  /** Obtiene los datos del usuario,
   * Recibe respuesta del backend
   */
  login(idLogueado: any) {

    this.idRuta = idLogueado.toString();
    
    /**
    this.http.get<Auth>(`${ this.baseUrl }ajustadores`)
                .pipe(
                  tap( auth => this._authGetUsuario)
                )
     */
    return this.http.get<Auth>(`${ this.baseUrl }usuarios/${this.idRuta}`)
                .pipe(
                  tap( auth => this._auth = auth ),
                  tap( auth => localStorage.setItem('idUsuario', auth.idUsuario)),
                  tap( auth => localStorage.setItem('nombreCompleto', auth.nombreCompleto)),
                  tap( auth => localStorage.setItem('idTipoUsuario', auth.idTipoUsuario)),
                  
                );
  }


  logout() {
    this._auth = undefined;
  }

  obtenerTipoUsuarioActivo() {
    return this._auth?.idTipoUsuario;
  }


}
