import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { ExpenseItem } from '../models/ExpenseItem';

@Injectable({
  providedIn: 'root'
})
export class ExpenseServiceService {

  private requestUrl = "https://localhost:7081/api/expenses";
  public expenseItems: ExpenseItem[] = [];


  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<ExpenseItem[]> {
    return this.httpClient.get<ExpenseItem[]>(this.requestUrl).pipe(
      tap(res => this.expenseItems = [...res])
    );
  }

  addNewItem(item: ExpenseItem): Observable<ExpenseItem[]> {
    return this.httpClient.post<ExpenseItem[]>(this.requestUrl, item).pipe(
      tap(res => this.expenseItems = [...res])
    );
  }

  deleteItem(id: string): Observable<ExpenseItem[]> {
    const _requestUrl = `${this.requestUrl}/${id}`;
    return this.httpClient.delete<ExpenseItem[]>(_requestUrl).pipe(
      tap(res => this.expenseItems = [...res])
    );
  }
}
