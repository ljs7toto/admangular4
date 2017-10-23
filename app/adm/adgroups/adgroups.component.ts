import { Component, OnInit } from '@angular/core';
import { Adgroups } from '../../models/adgroups';
import { AdmService } from '../../services/adm.service';
import { Ads } from '../../models/ads';

@Component({
  selector: 'app-adgroups',
  templateUrl: './adgroups.component.html',
  styleUrls: ['./adgroups.component.css']
})

export class AdgroupsComponent implements OnInit {
  adson : Object; 
  adgroups: Adgroups[];
  adgroupons : Adgroups[];
//   adgrouponin : Adgroups;
  ads : Ads;
  successMessage: string = '';
  errorMessage: string = '';
  successMessage_second: string = '';
  errorMessage_second: string = '';

  constructor(private service: AdmService) { }

  ngOnInit() {
    this.service.getadgroups()
    .subscribe(adgroups => this.adgroups = adgroups);
  }

  clickupdateAdgroups(){
    this.successMessage = '';
    this.errorMessage = '';
    
     this.service.updateAdgroups({"data" : this.adgroups})
     .subscribe(
      adgroupons => { this.adgroupons = adgroupons
        console.log(adgroupons);
        this.successMessage = 'User was updated'
        console.log('user was updated');
      },
      err => {
        this.errorMessage = 'User could not be updated'
        console.log('err');
      });
   
  }
  
  click_getadsid(adgroupon : any){
    // let id = this.adgroupsObj;
    // // var id = { adgroup_id:'grp-a001-02-00000000464553'};
    this.adson = adgroupon;
    console.log(adgroupon);
    this.service.getadsid(adgroupon)
    .subscribe(adson => this.ads = adson);
  }

  click_bidding(){
    this.successMessage_second = '';
    this.errorMessage_second = '';
    
     this.service.updateAds({"data":{ "adgroups": this.adgroupons, "ads" :this.ads}})
     .subscribe(
      ads => {
      this.successMessage_second = 'User was updated'
      console.log('user was updated');
      },
      err => {
        this.errorMessage_second = 'User could not be updated'
        console.log('err');
      });

      
  }
}
