import { Component, OnInit } from '@angular/core';
import { AdmService } from '../../services/adm.service';
import { Adgroups } from '../../models/adgroups';
import { Ads } from '../../models/ads';

@Component({
  selector: 'app-adgroups-on',
  templateUrl: './adgroups-on.component.html',
  styleUrls: ['./adgroups-on.component.css']
})
export class AdgroupsOnComponent implements OnInit {
  adgroupons : Adgroups[];
  
//   ads : Ads;
  constructor(private service: AdmService) { }
  
  ngOnInit() {
    // this.service.getadgroupson()
    // .subscribe(adgroupons => this.adgroupons = adgroupons);
  }

}
