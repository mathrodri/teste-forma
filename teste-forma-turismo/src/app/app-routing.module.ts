import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/form-cadastro/cadastro.component';
import { ConfirmacaoCadastroComponent } from './cadastro/confirmacao-cadastro/confirmacao-cadastro.component';
import { SucessoComponent } from './cadastro/sucesso/sucesso.component';

const routes: Routes = [
  {
    path: '', component: CadastroComponent
  },
  {
    path: 'confirmacao', component: ConfirmacaoCadastroComponent
  },
  {
    path: 'sucesso', component: SucessoComponent
  },
  {
    path: '**', redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
