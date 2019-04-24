import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ConfirmacaoCadastroComponent } from './confirmacao-cadastro/confirmacao-cadastro.component';
import { SucessoComponent } from './sucesso/sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConfirmacaoCadastroComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
