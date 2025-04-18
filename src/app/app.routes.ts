import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { UserLoginComponent } from './user-login/user-login.component';

export const routes: Routes = [
    { path: 'home', component: HomePageComponent, pathMatch: 'full' },
    {path:'auth', component:UserLoginComponent, pathMatch:'full'}
];
