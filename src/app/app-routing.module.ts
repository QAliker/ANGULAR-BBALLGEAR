import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './common/auth.guard';
import { LoginComponent } from './container/login/login.component';
import { ProductContainerComponent } from './container/product-container/product-container.component';
import { ProductComponent } from './container/product/product.component';
import { AddFormComponent } from './container/profile/address-form/add-form/add-form.component';
import { EditFormComponent } from './container/profile/address-form/edit-form/edit-form.component';
import { ProfileComponent } from './container/profile/profile.component';
import { RegisterComponent } from './container/register/register.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'products', 
  component: ProductContainerComponent,
  canActivate: [AuthGuard]},
  {path: 'profile', component: ProfileComponent,
  canActivate: [AuthGuard]},
  {path: 'address', component: AddFormComponent,
  canActivate: [AuthGuard]},
  {path: 'editAddress', component: EditFormComponent,
  canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
