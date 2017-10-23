import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AdgroupsComponent } from './adm/adgroups/adgroups.component';
import { AdgroupsOnComponent } from './adm/adgroups-on/adgroups-on.component';


export const routes: Routes = [
    {
      path : '',
      redirectTo : '',
      pathMatch: 'full'
    },
    {
        path : 'adgroups',
        component : AdgroupsComponent
    },
    // {
    //     path : 'ads',
    //     component : AdsComponent
    // }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(routes);