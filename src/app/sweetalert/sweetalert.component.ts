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
    // DELETE record
    if (buttonType === 'delete'){
      Swal.fire({
        title: `Do you want to delete information of ${currentEmployee.username}?`,
        showCancelButton: true,
        confirmButtonText: "OK",
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
        },
        icon: "warning"
      }).then((result) => {
        if (result.isConfirmed) {
          employee.splice(index,1);
          Swal.fire({
            title:`Deleted Reliable employee: ${currentEmployee.username}`,
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
        }
      });
    }
  }
}
