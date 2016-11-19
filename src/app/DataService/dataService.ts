import { Injectable,NgModule } from '@angular/core';
import { Http, Response, Headers,RequestOptionsArgs,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map'
import { Observable }   from 'rxjs/Rx';
import { ContactRequest } from '../Model/ContactRequest';
import {objectToParams} from '../Utilities/utilities';
 @NgModule({
})
@Injectable()
export class DataService {
 
    private actionUrl: string;
    private headers: Headers;
    
    constructor(private _http: Http) {
        let tokenInfo=JSON.parse(localStorage.getItem('tokenInfo'));
        this.actionUrl = 'http://reqres.in'; 
        this.headers = new Headers();
        this.headers.append('Accept','application/json, text/plain, */*');
        this.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
      

    } 
 
    public Add = (contactRequest: ContactRequest): Observable<any> => {  
        let options = new RequestOptions({ headers: this.headers }); 
        let methodname = "/api/users";
        return this._http.post(this.actionUrl + methodname, objectToParams(contactRequest), { headers: this.headers })
            .map((response: Response) => <any>response.json())
            .catch(this.handleError);
    }
   
 
  
    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}