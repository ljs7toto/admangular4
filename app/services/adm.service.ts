import { Injectable } from '@angular/core';
import { Http,Response} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Adgroups } from '../models/adgroups';
import { Ads } from '../models/ads';

@Injectable()
export class AdmService {
  private adgroupsUrl: string = 'http://node4.mas-i.com/adgroups';
  private adsUrl: string = 'http://node4.mas-i.com/ads';
  headers: Headers;


  constructor(private http: Http) {
   }
  
  /**광고그룹 리스트 빼오기*/
   getadgroups():Observable<Adgroups[]> {
        return this.http.get(this.adgroupsUrl)
        .map(res => res.json().results)
        .catch(this.handleError);
   }

  /** 광고그룹 리스트 on_stage 된 것들 업데이트 */
    updateAdgroups(adgroups): Observable<any> {
        return this.http.put(this.adgroupsUrl, adgroups)
        .map(res => res.json().results)
        .catch(this.handleError);
    }

//    /** 광고그룹 리스트 on_stage 된 것들 리스트 */
//     getadgroupson():Observable<Adgroups[]> {
//         return this.http.get(this.adgroupsUrl)
//         .map(res => res.json().results)
//         .catch(this.handleError);
//    }

     /*
    * convert user info from the API to our standard/format
    */
    // getadgroup_id(): string {
    //     return this._adgroup_id;
    // }

    /** 광고 그룹의 소재 가져오기 */
    getadsid(adgroup_id):Observable<Ads> {
        return this.http.get(`${this.adsUrl}?adgroup_id=${adgroup_id}`)
        .map(res => res.json().results)
        .catch(this.handleError);
    }

    updateAds(bidding): Observable<any> {
        return this.http.put(this.adsUrl, bidding)
        .map(res => res.json())
        
        .catch(this.handleError);
    }

    // /*Handle any errors from the API*/
    private handleError(err){
        let errMessage : string;

           if (err instanceof Response){
               let body = err.json() || '';
               let error = body.error || JSON.stringify(body);
               errMessage = `${err.status} - ${err.statusText} || ''} ${error}`;
           } else{
               errMessage = err.message ? err.message : err.toString();
           }

           return Observable.throw(errMessage);

    }


}
