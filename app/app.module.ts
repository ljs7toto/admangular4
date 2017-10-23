import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { AdmService } from './services/adm.service';
import { routing } from './app.routing';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { AdgroupsComponent } from './adm/adgroups/adgroups.component';
import { AdgroupsOnComponent } from './adm/adgroups-on/adgroups-on.component';
import{ AdsComponent } from './adm/ads/ads.component';

@NgModule({
  declarations: [
    AppComponent,
    AdgroupsComponent,
    AdgroupsOnComponent,
    AdsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [AdmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
