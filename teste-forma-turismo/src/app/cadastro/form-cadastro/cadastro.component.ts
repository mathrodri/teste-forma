import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { CadastroService } from '../cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.styl']
})
export class CadastroComponent implements OnInit {

  constructor(
    private cadastroService: CadastroService
  ) { }

  controls = {
    nome: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    sobreNome: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    dataNascimento: new FormControl(''),
    cep: new FormControl('', [
      Validators.required,
      Validators.minLength(8)
    ]),
    logradouro: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    numero: new FormControl(''),
    complemento: new FormControl(''),
    bairro: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    localidade: new FormControl('', [
      Validators.required
    ]),
    uf: new FormControl('', [
      Validators.required
    ])
  };

  cadastroForm: FormGroup = new FormGroup(this.controls);

  ngOnInit() {
  }

  getAdressByCep() {
    this.cadastroService.getAdressByCep(this.controls.cep.value)
      .subscribe((data: any) => {
        this.controls.logradouro.setValue(data.logradouro);
        this.controls.bairro.setValue(data.bairro);
        this.controls.localidade.setValue(data.localidade);
        this.controls.uf.setValue(data.uf);
      });
  }

  submitCadastro() {
    return false;
  }
}
