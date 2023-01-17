import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { NavbarComponent } from './container/navbar/navbar.component';
import { RegisterComponent } from './container/register/register.component';
import { ProductComponent } from './container/product/product.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProfileComponent } from './container/profile/profile.component';
import { JwtInterceptor } from './common/jwt.interceptor';
import { EditFormComponent } from './container/profile/address-form/edit-form/edit-form.component';
import { AddFormComponent } from './container/profile/address-form/add-form/add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RegisterComponent,
    ProductComponent,
    ProductContainerComponent,
    ProfileComponent,
    EditFormComponent,
    AddFormComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    HttpClient,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
