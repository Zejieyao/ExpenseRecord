import {Component, ViewChild} from '@angular/core';
import {MatTable} from '@angular/material/table';
import { FormGroup, FormControl } from '@angular/forms';



export interface ExpenseType {
  Description: string,
  Type: string,
  Amount: string,
  Date: string
}

const ELEMENT_DATA: ExpenseType[] = [
  {Description: 'Lunch', Type:"Meal", Amount: "11", Date: "20220101"},

];

 @Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  displayedColumns: string[] = ['Description', 'Type', 'Amount', 'Date', 'Delete'];
  dataSource = [...ELEMENT_DATA];

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
  }

  removeData() {
    this.dataSource.pop();
  }
}