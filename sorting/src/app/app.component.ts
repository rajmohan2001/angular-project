import { Component } from '@angular/core';
import { MyTableComponent } from './shared/components/my-table/my-table.component';
import tableData from '../assets/tabledata.json';


@Component({
  selector: 'app-root',
  imports: [MyTableComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  

  tableColumns: string[] = tableData.columns;
  tableRows: any[] = tableData.rows;

}
