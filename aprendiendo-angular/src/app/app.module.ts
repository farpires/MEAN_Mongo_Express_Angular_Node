import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videoJuego/videoJuego.component';
import { ZapatillasComponent } from './zapatillas/zapatillas.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
  declarations: [//aqui van las directivas componentes
    AppComponent,
    VideojuegoComponent,
    ZapatillasComponent,
    CursoComponent

  ],
  imports: [
    BrowserModule,
    // AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
