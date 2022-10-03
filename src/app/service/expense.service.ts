import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Expense } from '../interface/expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
   expense:Expense={expenseid:0,expensename:"",amount:0,expensedate:"",expensecategory:"",paymenttype:"",comment:""}
  constructor(private http :HttpClient) { }

  saveexpense(model: any): Observable<any> {
    return this.http.post(`${environment.Base_Url}addExpense`, model);
  }

  listexpsense(userid:any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listExpense/${userid}`).toPromise();
  }

  
  listExpenseDaily(userid:any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listExpenseDaily/${userid}`).toPromise();
  }

  listExpenseMonth(expensedate:any,userid:any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listExpenseMonth/${expensedate}/${userid}`).toPromise();
  }

  listExpenseYear(expensedate:any,userid:any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listExpenseYear/${expensedate}/${userid}`).toPromise();
  }

  listExpensePaymentType(paymenttype:any,userid:any):Promise <any> {
    return this.http.get(`${environment.Base_Url}listExpensePaymentType/${paymenttype}/${userid}`).toPromise();
  }

  getexpense(expenseid : any):Observable<any> {
    return this.http.get(`${environment.Base_Url}getExpense/${expenseid}`);
  }

  updateExpense(model : any):Observable<any> {
    return this.http.put(`${environment.Base_Url}updateExpense`,model);
  }

  deleteExpense(expenseid : any):Observable<any> {
    return this.http.delete(`${environment.Base_Url}deleteExpense/${expenseid}`);
  }
}
