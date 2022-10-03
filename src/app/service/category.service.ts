import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  
  constructor(private http : HttpClient) { }

  savecategory(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}addCategory`, model);
  }

  listcategory():Promise <any> {
    return this.http.get(`${environment.Base_Url}listCategory`).toPromise();
  }

}
