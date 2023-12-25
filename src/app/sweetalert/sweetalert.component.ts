import {Component, Input, ViewChild, ViewChildren} from '@angular/core';
import {CommonModule} from "@angular/common";
import {EmployeeFormComponent} from "../employee-form/employee-form.component";

import Swal from "sweetalert2";

@Component({
  selector: 'app-sweetalert',
  standalone: true,
  imports: [
    CommonModule, EmployeeFormComponent
  ],
  templateUrl: './sweetalert.component.html',
  styleUrl: './sweetalert.component.css'
})
export class SweetalertComponent {
  @Input()
  employee: any | undefined;
  @Input()
  button: any | undefined;
  @Input()
  index: number | 0 | undefined;

  showAlert(employee: any, buttonType: string, index?: number) {
    let currentEmployee = (index || index === 0 ? employee[index] : index);
    // DELETE
    if (buttonType === 'delete'){
      Swal.fire({
        title: `Do you want to delete information of ${currentEmployee.username}?`,
        showCancelButton: true,
        confirmButtonText: "OK",
        icon: "warning"
      }).then((result) => {
        if (result.isConfirmed) {
          employee.splice(index,1);
          Swal.fire(`DELETED: ${currentEmployee.username}`);
        }
      });
    }
    else if (buttonType === 'edit') {
      Swal.fire({
        title: 'Edit Form',
        html: `<app-employee-form
                [employee]="employee"
                ></app-employee-form>
                `,
        showCancelButton: true,
        confirmButtonText: 'Submit',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`CONFIRMED: ${currentEmployee.username}`);
        }
      })
    } else {
      Swal.fire({
        title: 'New Form',
        html: `<app-employee-form
                [employee]="employee"
                ></app-employee-form>`,
        showCancelButton: true,
        confirmButtonText: 'Submit',
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(`SAVED: ${currentEmployee.username}`);
        }
      })
    }
  }
}
