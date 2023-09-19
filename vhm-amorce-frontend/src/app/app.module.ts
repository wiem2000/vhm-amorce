import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrmClss1Component } from './components/prm-clss1/prm-clss1.component';
import { PrmSbClss1Component } from './components/prm-sb-clss1/prm-sb-clss1.component';
import { PrmTp1Component } from './components/prm-tp1/prm-tp1.component';
import { PrmTg1Component } from './components/prm-tg1/prm-tg1.component';
import { PrmVl1Component } from './components/prm-vl1/prm-vl1.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
   
    SidebarComponent,
    PrmClss1Component,
    PrmSbClss1Component,
    PrmTp1Component,
    PrmTg1Component,
    PrmVl1Component,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
