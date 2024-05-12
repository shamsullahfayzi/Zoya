import { Routes } from '@angular/router';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { UsersComponent } from './admin/users/users.component';
import { ServicesComponent } from './admin/services/services.component';
import { AppComponent } from './app.component';

export const routes = [
    { path: 'new-patient', component: NewPatientComponent, },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'admin/users', component: UsersComponent },
    { path: 'admin/services', component: ServicesComponent },
];
