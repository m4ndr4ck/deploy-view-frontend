import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Deployment } from './deployment.module';
import {FormControl} from '@angular/forms';


export interface Application {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app-frontend';
  value = ''
  public displayedColumns = ['application', 'module', 'version', 'environment', 'date', 'status'];
  public dataSource = new MatTableDataSource<Deployment>()
  applications: Application[] = [
    {value: 'resource-inventory', viewValue: 'Resource Inventory'},
    {value: 'resource-activation', viewValue: 'Resource Activation'},
    {value: 'resource-order', viewValue: 'Resource Order'}
  ];
  date1 = new FormControl(new Date())
  date2 = new FormControl(new Date());

  selectedValue: string;
  nome : string
  onEnter() {
    var minDate = this.date1.value.setHours(0,0,0,0);
    var maxDate = this.date2.value.setHours(0,0,0,0) + 86400000;
    this.httpClient.get('http://10.129.179.191:3333'+'/deployments/get/'
    +this.selectedValue+'/'
    +minDate+'/'
    +maxDate).subscribe((res: any)=>{
      console.log(res);
      console.log(minDate);
      console.log(maxDate);
      this.dataSource = res;
      this.nome= res.message
      });
   }
  constructor(private httpClient: HttpClient){}
}
