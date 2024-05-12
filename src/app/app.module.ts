import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { authIntercepor } from './auth/auth.interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from "@angular/material/button";
import { MatIconModule } from "@angular/material/icon";
import { MatSortModule } from "@angular/material/sort";
import { MatPaginatorModule } from "@angular/material/paginator";
import { ListPatientsComponent } from './list-patients/list-patients.component';
import { MatTableModule } from '@angular/material/table';
import { NewPatientComponent } from './new-patient/new-patient.component';
import { RouterLink, RouterModule, RouterOutlet, provideRouter } from '@angular/router';
import { routes } from './app.router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { HomeComponent } from './home/home.component';
import { MatList, MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCardContent, MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input'
import { MatGridListModule } from '@angular/material/grid-list'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UserService } from './service/user.service';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGaurdGuard } from './auth/auth.guard';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AdminComponent } from './admin/admin.component';
import { UsersComponent } from './admin/users/users.component';
import { ServicesComponent } from './admin/services/services.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { CurrencyPipe } from '@angular/common';
import { isLoggedInGuard } from './is-logged-in.guard';
import { MatDialogActions, MatDialogClose, MatDialogContent, MatDialogModule, MatDialogTitle } from '@angular/material/dialog';
import { ServiceDialogComponent } from './admin/services/service-dialog/service-dialog.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';

export function tokenGetter() {
  return localStorage.getItem('token');
}
@NgModule({
  declarations: [
    AppComponent,
    ListPatientsComponent,
    NewPatientComponent,
    HomeComponent,
    LoginComponent,
    ForbiddenComponent,
    UsersComponent,
    ServiceDialogComponent,
    AdminSidebarComponent,
  ],
  imports: [
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ["localhost:44365"],
        disallowedRoutes: []
      }
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, canActivate: [AuthGaurdGuard] },
      { path: 'home', component: HomeComponent, canActivate: [AuthGaurdGuard] },

      { path: 'login', component: LoginComponent, pathMatch: 'full', canActivate: [isLoggedInGuard] },

      // { path: 'register', component: RegisterComponent, pathMatch: 'full' },
      { path: 'admin', component: AdminComponent, pathMatch: 'full', canActivate: [AuthGaurdGuard], data: { permittedRoles: ["admin"] } },
      { path: 'admin/users', component: UsersComponent, pathMatch: 'full', canActivate: [AuthGaurdGuard], data: { permittedRoles: ["admin"] } },
      { path: 'admin/services', component: ServicesComponent, pathMatch: 'full', canActivate: [AuthGaurdGuard], data: { permittedRoles: ["admin"] } },
      { path: 'forbidden', component: ForbiddenComponent, pathMatch: 'full' },

    ]),

    HttpClientModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserModule,
    MatToolbarModule,
    MatSidenavModule,
    AppRoutingModule,
    MatListModule,
    MatIconModule, MatSidenavModule, MatSidenavModule, MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    RouterOutlet,
    MatListModule,
    NgApexchartsModule,
    MatCardModule,
    RouterLink,
    BrowserAnimationsModule,
    MatButtonModule,
    CurrencyPipe,
    MatIconModule,
    MatTableModule,
    RouterOutlet,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatSnackBarModule,
  ],
  providers: [provideRouter(routes), UserService, { provide: HTTP_INTERCEPTORS, useClass: authIntercepor, multi: true }
  ],


  bootstrap: [AppComponent]
})
export class AppModule { }
