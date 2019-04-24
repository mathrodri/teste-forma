import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { errorsEnum } from './cadastro-errors.enum';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(
    private http: HttpClient
  ) { }

  getAdressByCep(cep: string) {
    return this.http.get(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
