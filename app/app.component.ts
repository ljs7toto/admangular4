import { Component, OnInit } from '@angular/core';
import { Http,Response } from '@angular/http';
import { Adgroups } from './models/adgroups';
import { AdmService } from './services/adm.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })
export class AppComponent implements OnInit {
    constructor() { }
    
      ngOnInit() {
      }

}
