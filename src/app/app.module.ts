import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CadastroModule } from './cadastro/cadastro.module'
import { ListaModule } from './lista/lista.module';
import { AppComponent } from './app.component';
import { ShowDirective } from './shared/diretivas/show.directive';

@NgModule({
  declarations: [
    AppComponent,
    ShowDirective
  ],
  imports: [
    BrowserModule,
    CadastroModule,
    ListaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
