import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import { TaskTableDataSource, TaskTableItem } from './task-table-datasource';
import {WebservService} from "../webserv.service";
import {timestamp} from "rxjs";

@Component({
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  styleUrls: ['./task-table.component.scss']
})
export class TaskTableComponent implements AfterViewInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatTable) table!: MatTable<TaskTableItem>;
  dataSource: TaskTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['task', 'importance', 'timeNeeded', 'delegate',
  'date', 'complete', 'completionTime', 'save'];
  values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  sVals = new FormControl();
  importanceVal: any;
  public myDates: any = {};


  constructor(private webServ: WebservService) {
    this.dataSource = new TaskTableDataSource();
  }

  ngAfterViewInit(): void {
    console.log(new Date().getTime());
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;


  }

  // printvals() {
  //   console.log(this.sVals.value);
  // }
  logData(row: any, ithDate: Date){
    row['timeNeeded'] = Number(row["timeNeeded"]);
    row['completionTime'] = Number(row['completionTime']);
    row['date'] = ithDate;
    row['delegate'] = row['delegate'] === 'yes';
    row['complete'] = row['complete'] === 'yes';
    console.log(typeof row);
    console.log(JSON.stringify(row) );
    console.log(row);
    this.createTask(row).subscribe((response:any) => {
      console.log(response);
    });




  }




  createTask(row:Object)
  {

    console.log("postad");
    return this.webServ.post('task',{row});

  }
}
