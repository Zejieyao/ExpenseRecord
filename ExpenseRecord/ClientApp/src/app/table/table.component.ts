import {Component, OnInit, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';
import { ExpenseItem } from '../models/ExpenseItem';
import { ExpenseServiceService } from '../service/expense-service.service';

 @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  public desc: string = "";
  public am: string = "";
  public ty: string = "";
  public dt: string = "";

  constructor(private expenseSerice: ExpenseServiceService){}
  ngOnInit(): void {
    this.expenseSerice.getAll().subscribe(res => this.dataSource = res);
  }
  displayedColumns: string[] = ['Description', 'Type', 'Amount', 'Date', 'Delete'];
  dataSource: ExpenseItem[] = this.expenseSerice.expenseItems;


  addData() {
    if(this.desc == "" || this.dt == "" || this.ty == "" || this.am == "") {
      alert("Input all info please!!!!!!!!!");
      return;
    }
    const newExpenseItem: ExpenseItem = {
      Description: this.desc,
      ExpenseDate: this.dt,
      ExpenseAmount: this.am,
      ExpenseType: this.ty
    };

    this.expenseSerice.addNewItem(newExpenseItem).subscribe(res => this.dataSource = res);

    // const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    // this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  }

  removeData(id: string) {
    this.expenseSerice.deleteItem(id).subscribe(res => this.dataSource = res);
  }
}