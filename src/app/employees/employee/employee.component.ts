import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor( public service: EmployeeService) { }
   departments = [
     { id: 1, value: 'Dep 1'},
     { id: 2, value: 'Dep 2'},
     { id: 3, value: 'Dep 3'}
   ];
  ngOnInit(): void {
    this.service.getEmployees();
  }

  onClear(){
    let $key = this.service.form.get('$key').value;
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.service.form.patchValue({ $key });
  }
  onSubmit(){
    if(this.service.form.valid){
      this.service.insertEmployee(this.service.form.value);
      this.service.form.reset();
      this.service.initializeFormGroup();
    }
  }
}
