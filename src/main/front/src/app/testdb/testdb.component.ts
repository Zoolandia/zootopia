import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-testdb',
  templateUrl: './testdb.component.html',
  styleUrls: ['./testdb.component.scss']
})
export class TestdbComponent implements OnInit {
  tableData: any[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTableData();
  }

  getTableData(): void {
    this.http.get<any[]>('localhost:3306/ZootopiaDB')
      .subscribe(data => {
        this.tableData = data;
      });
  }
}