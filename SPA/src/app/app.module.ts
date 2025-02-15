import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavigationModule } from './components/navigation/navigation.module';
import { PagesModule } from './components/pages/pages.module';
import { AppComponent } from './app.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent  // Declare seu componente
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NavigationModule,
    PagesModule,
    CommonModule,
    RouterOutlet
    // Outros módulos que seu app necessitar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
