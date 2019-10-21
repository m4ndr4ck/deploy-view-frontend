import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Deployment } from './deployment.module';


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
  public displayedColumns = ['application', 'module', 'environment', 'date', 'status'];
  public dataSource = new MatTableDataSource<Deployment>()
  applications: Application[] = [
    {value: 'resource-inventory', viewValue: 'Resource Inventory'},
    {value: 'resource-activation', viewValue: 'Resource Activation'},
    {value: 'resource-order', viewValue: 'Resource Order'}
  ];
  selectedValue: string;
  nome : string
  onEnter() {
    this.httpClient.get('http://127.0.0.1:8080'+ '/deployments/get/'+this.selectedValue).subscribe((res: any)=>{
      console.log(res);
      this.dataSource = res;
      this.nome= res.message
  });
   }
  constructor(private httpClient: HttpClient){}
}
