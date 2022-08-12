import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { AppConfigService } from "src/app/services/app-config.service";


@Injectable({
  providedIn: 'root'
})
export class CostService {

    BaseAPIUrl !: string;
    
    private http: HttpClient;
    constructor(http: HttpClient, appconfigservice: AppConfigService) {
        this.http = http;
        this.BaseAPIUrl = appconfigservice.apiBaseUrl;
        console.log('BaseAPIUrl : ' + this.BaseAPIUrl);
    }

  getAllCostInfo(itemcode : any): Observable<any> {
      //return this.http.get(this.BaseAPIUrl + "/Cost/GetCosts");
    return this.http.get('https://localhost:44377/Cost/GetCosts?itemcode=' + itemcode);
      
    }

}
