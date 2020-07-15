import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPageComponent } from './admin-page/admin-page.component'


const routes: Routes = [
  {path : '', redirectTo: '/login', pathMatch: 'full'}, //default 
  {path : 'login', component: LoginComponent},
  {path : 'menu', component: MenuComponent},
  {path : 'admin-page', component: AdminPageComponent},
  {path : '**', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [LoginComponent, MenuComponent,AdminPageComponent,PageNotFoundComponent]
