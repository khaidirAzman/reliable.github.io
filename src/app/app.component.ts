import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import datasource from '../assets/datasource.json';
import {SweetalertComponent} from "./sweetalert/sweetalert.component";
import {EmployeeFormComponent} from "./employee-form/employee-form.component";
import { v4 as uuidv4 } from 'uuid';
import moment from "moment";
import Swal from "sweetalert2";

function changeDOBtoString(employees: any) {
  employees.forEach(function (e:any){
    e.dob = moment(e.dob).format('YYYY-MM-DD');
  })
  return employees;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SweetalertComponent, EmployeeFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
  }

  title = 'reliable';
  EmployeeListData: any[] = changeDOBtoString(datasource[0]);
  EmployeeSchema = {
    username: "",
    id: "",
    email: "",
    dob: "",
    gender: "",
    position: "",
    address: "",
    empid: "",
    hobbies: ['']
  };
  employee = this.EmployeeSchema;
  formType: string = '';
  static positionList: any[] = datasource[1];
  static hobbiesList: any[] = datasource[2];
  static genderList: any[] = datasource[3];

  protected readonly JSON = JSON;

  openModal(type:string, ...employee:any) {
    document.getElementById("backdrop")!.style.display = "block";
    document.getElementById("formModal")!.style.display = "block";
    document.getElementById("formModal")!.classList.add("show");
    if(type === 'edit') {
      this.employee = employee[0];
    }
    this.formType = type;
  }
  closeModal() {
    document.getElementById("backdrop")!.style.display = "none";
    document.getElementById("formModal")!.style.display = "none";
    document.getElementById("formModal")!.classList.remove("show");
    this.EmployeeSchema = {
      username: "",
      id: "",
      email: "",
      dob: "",
      gender: "",
      position: "",
      address: "",
      empid: "",
      hobbies: ['']
    };
    this.employee = this.EmployeeSchema;
  }

  getEmployee():any{
    return this.employee;
  }

  saveForm(formType: string){
    if (this.employee.id.length <= 0) {
      this.employee.id = uuidv4();
    }
    if (formType === 'new'){
      this.EmployeeListData.push(this.employee);
      Swal.fire({
        title:`Added new Reliable employee : ${this.employee.username}`,
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      this.closeModal();
    } else {
      let index = this.EmployeeListData.indexOf(this.employee);
      this.EmployeeListData[index] = this.employee;
      Swal.fire({
        title:`Updated Reliable employee : ${this.employee.username}`,
        icon: "success",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      this.closeModal();
    }
  }
}
