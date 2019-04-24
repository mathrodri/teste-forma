import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/form-cadastro/cadastro.component';
import { ConfirmacaoCadastroComponent } from './cadastro/confirmacao-cadastro/confirmacao-cadastro.component';
import { SucessoComponent } from './cadastro/sucesso/sucesso.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ConfirmacaoCadastroComponent,
    SucessoComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
