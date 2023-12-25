import {Component, Input} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {AppComponent} from "../app.component";
import {DatePipe, NgForOf, NgIf} from "@angular/common";

@Component({
  selector: 'app-employee-form',
  standalone: true,
  imports: [
    FormsModule, AppComponent, NgForOf, DatePipe, NgIf
  ],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css'
})
export class EmployeeFormComponent {
  @Input()
  employee: any | undefined;
  @Input()
  formType: string | undefined;

  constructor() {
  }

  ngOnInit(){
  }

  positions: any = AppComponent.positionList;
  genders: any = AppComponent.genderList;
  hobbies: any = AppComponent.hobbiesList;
  protected readonly alert = alert;
  protected readonly JSON = JSON;

  changeGender(value: string){
    this.employee.gender = value;
  }

  // changeHobbies(value: string[]){
  //   this.employee.hobbiesList = value;
  // }
}
