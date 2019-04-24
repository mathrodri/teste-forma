import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { SucessoComponent } from './sucesso/sucesso.component';

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
