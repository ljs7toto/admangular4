import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../services/adm.service';
import { Adgroups } from '../../models/adgroups';

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css']
})
export class AdsComponent implements OnInit {
//   adgroupons : Adgroups[];
  
//   ads : Ads;
  constructor() { }
  
  ngOnInit() {
    // this.service.getadgroupson()
    // .subscribe(adgroupons => this.adgroupons = adgroupons);
  }



}
