import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountsComponent } from './accounts/accounts.component';
import { AddexpenseComponent } from './expense/addexpense/addexpense.component';
import { DailyexpenseComponent } from './expense/dailyexpense/dailyexpense.component';
import { MonthlyexpenseComponent } from './expense/monthlyexpense/monthlyexpense.component';
import { YearlyexpenseComponent } from './expense/yearlyexpense/yearlyexpense.component';
import { CategoryexpenseComponent } from './expense/categoryexpense/categoryexpense.component';
import { HeaderComponent } from './header/header.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    AccountsComponent,
    AddexpenseComponent,
    DailyexpenseComponent,
    MonthlyexpenseComponent,
    YearlyexpenseComponent,
    CategoryexpenseComponent,
    HeaderComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }