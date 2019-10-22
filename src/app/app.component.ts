import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { Deployment } from './deployment.module';
<<<<<<< HEAD
import {FormControl} from '@angular/forms';
=======
>>>>>>> 3a4c6a6ffad14c7fd7fb3dda74646420638356d4


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
<<<<<<< HEAD
  public displayedColumns = ['application', 'module', 'version', 'environment', 'date', 'status'];
=======
  public displayedColumns = ['application', 'module', 'environment', 'date', 'status'];
>>>>>>> 3a4c6a6ffad14c7fd7fb3dda74646420638356d4
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
    this.httpClient.get('http://192.168.43.102:8080'+'/deployments/get/'
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
