

import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild, viewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatSort } from '@angular/material/sort';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';



@Component({
  selector: 'app-my-table',
  imports: [CommonModule, MatTableModule, MatSortModule,MatInputModule,MatPaginatorModule],
  templateUrl: './my-table.component.html',
  styleUrl: './my-table.component.css'
})
export class MyTableComponent implements OnChanges, AfterViewInit {
  @Input() columns: string[] = [];

  @Input() rows: any[] = [];
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!:MatPaginator;
  dataSource = new MatTableDataSource(this.rows);

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['rows']) {
      this.dataSource = new MatTableDataSource(this.rows);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator=this.paginator;
    }
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator=this.paginator;
  }

  applyFilter(event:Event){
    const filterValue=(event.target as HTMLInputElement).value;
    this.dataSource.filter=filterValue.trim().toLowerCase();

  }




}