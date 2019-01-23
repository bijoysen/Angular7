import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor( private service: EmployeeService) { }

  ngOnInit() {
  }

  resetForm( form: NgForm) {
    form.resetForm();
    this.service.formData = {
      id: null,
      fullName: '',
      position: '',
      empCode: '',
      mobile: '',
    }
  }

}
