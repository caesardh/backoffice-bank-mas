import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SideNavComponent } from './side-nav/side-nav.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { AgentComponent } from './pages/agent/agent.component';
import { DashboardDetailComponent } from './dashboard/dashboard-detail/dashboard-detail.component';
import { PrimeNGModule } from './shared/primeng.module';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    DashboardComponent,
    DashboardOverviewComponent,
    AgentComponent,
    DashboardDetailComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    PrimeNGModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
