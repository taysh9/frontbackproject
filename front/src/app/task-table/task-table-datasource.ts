import { DataSource } from '@angular/cdk/collections';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { map } from 'rxjs/operators';
import { Observable, of as observableOf, merge } from 'rxjs';

// TODO: Replace this with your own data model type
export interface TaskTableItem {
  task: string;
  importance: any;
  time_needed: number;
  delegate: string;
  complete: string;
  completion_time: number;
}

let importanceVal = ""
console.log(importanceVal)

// TODO: replace this with real data from your application
const EXAMPLE_DATA: TaskTableItem[] = [
  {task: "Calculus II Exam", importance: "", time_needed: 3, delegate: "Yes",
   complete: "No", completion_time: 0},
  {task: "Machine Learning HW", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Design Appreciation: Quiz 4", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "English Essay", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Chemistry Lab", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Report", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Something", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Something else", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Buy pens", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Get groceries", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "11", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "12", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "13", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "14", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "15", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Task 16", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Task 17", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Task 18", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Task 19", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
  {task: "Task 20", importance: "", time_needed: 3, delegate: "Yes",
  complete: "No", completion_time: 0},
];

/**
 * Data source for the TaskTable view. This class should
 * encapsulate all logic for fetching and manipulating the displayed data
 * (including sorting, pagination, and filtering).
 */
export class TaskTableDataSource extends DataSource<TaskTableItem> {
  data: TaskTableItem[] = EXAMPLE_DATA;
  paginator: MatPaginator | undefined;
  sort: MatSort | undefined;

  constructor() {
    super();
  }

  /**
   * Connect this data source to the table. The table will only update when
   * the returned stream emits new items.
   * @returns A stream of the items to be rendered.
   */
  connect(): Observable<TaskTableItem[]> {
    if (this.paginator && this.sort) {
      // Combine everything that affects the rendered data into one update
      // stream for the data-table to consume.
      return merge(observableOf(this.data), this.paginator.page, this.sort.sortChange)
        .pipe(map(() => {
          return this.getPagedData(this.getSortedData([...this.data ]));
        }));
    } else {
      throw Error('Please set the paginator and sort on the data source before connecting.');
    }
  }

  /**
   *  Called when the table is being destroyed. Use this function, to clean up
   * any open connections or free any held resources that were set up during connect.
   */
  disconnect(): void {}

  /**
   * Paginate the data (client-side). If you're using server-side pagination,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getPagedData(data: TaskTableItem[]): TaskTableItem[] {
    if (this.paginator) {
      const startIndex = this.paginator.pageIndex * this.paginator.pageSize;
      return data.splice(startIndex, this.paginator.pageSize);
    } else {
      return data;
    }
  }

  /**
   * Sort the data (client-side). If you're using server-side sorting,
   * this would be replaced by requesting the appropriate data from the server.
   */
  private getSortedData(data: TaskTableItem[]): TaskTableItem[] {
    if (!this.sort || !this.sort.active || this.sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      const isAsc = this.sort?.direction === 'desc';
      switch (this.sort?.active) {
        case 'importance': return compare(a.importance, b.importance, isAsc);
        // case 'id': return compare(+a.id, +b.id, isAsc);
        default: return 0;
      }
    });
  }
}

/** Simple sort comparator for example ID/Name columns (for client-side sorting). */
function compare(a: string | number, b: string | number, isAsc: boolean): number {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}
