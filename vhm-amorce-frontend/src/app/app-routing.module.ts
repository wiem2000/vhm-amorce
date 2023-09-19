import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PrmClss1Component } from './components/prm-clss1/prm-clss1.component';
import { PrmSbClss1Component } from './components/prm-sb-clss1/prm-sb-clss1.component';
import { PrmTp1Component } from './components/prm-tp1/prm-tp1.component';
import { PrmTg1Component } from './components/prm-tg1/prm-tg1.component';
import { PrmVl1Component } from './components/prm-vl1/prm-vl1.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

const routes: Routes = [
  
 {
    path:'vhm/dashboard',
    component:DashboardComponent
  },
  
  { path: '', redirectTo: 'vhm/dashboard', pathMatch: 'full' },
  
  

  
  { path: 'vhm', component:SidebarComponent , children: [
    
  
  

    {
      path:"prmClss/:id",
      component:PrmClss1Component
    },
    
    { path: '', redirectTo: '/vhm/prmClss/2', pathMatch: 'full' },
    {
      path:"prmSbClss/:id",
      component:PrmSbClss1Component
    },
    {
      path:"prmTp/:id",
      component:PrmTp1Component
    },
    {
      path:"prmTg/:id",
      component:PrmTg1Component
    },
    {
      path:"prmVl/:id",
      component:PrmVl1Component
    },

]
}

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
