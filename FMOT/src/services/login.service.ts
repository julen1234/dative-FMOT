import {Injectable} from '@angular/core';
import {getAngularEmitterTransformFactory} from "@angular/compiler-cli/src/transformers/node_emitter_transform";
import {isNull, isUndefined} from "util";

export interface User {
  userName: string;
  password: string;
}


@Injectable()
export class LoginService {

  private _usuario: User = {
    userName: 'mfmot',
    password: '11fmot112017',
  };


  public getUsuario(): User {
    return this._usuario;
  }

  public setUsuario(value: User) {
    this._usuario = value;
    console.log('SERVICIO->', this._usuario);
  }

  public compare(obj: User): boolean {

    let OK: boolean;

    if (isNull(obj) || isUndefined(obj)) {
      OK = false;
    } else {
      if (obj.userName === this._usuario.userName && obj.password === this._usuario.password) {
        OK = true;
      }
    }
    return OK;
  }

  public isEmpty(obj: any): boolean {
    return obj == null || Object.keys(obj).length === 0;
  }

}
