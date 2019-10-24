import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';

const routesConfig: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main', component: MainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routesConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
