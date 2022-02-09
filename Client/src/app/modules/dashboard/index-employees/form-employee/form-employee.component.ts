import { Component, Input, OnInit } from '@angular/core';
import { PositionsService } from 'src/app/services/positions.service';

@Component({
  selector: 'app-form-employee',
  templateUrl: './form-employee.component.html',
  styleUrls: ['./form-employee.component.scss']
})
export class FormEmployeeComponent implements OnInit {
  @Input() employee;
  @Input() modalRef;
  @Input() action;
  @Input() employees;
  @Input() reset;
  public positions: [] = [];
  constructor(
    private positionsService: PositionsService
  ) { }

  ngOnInit(): void {
    this.positionsService.index().subscribe( res => {
      console.log( res );
      this.positions = res.positions;
    }, error => {
      console.log( error )
    })
  }
  onSubmit(values){
    console.log( values )
    switch(this.action){
        case 'store':
        values  = { ...values, id: this.employees.length + 1}
        this.employees.push(values);
        localStorage.setItem('employees', JSON.stringify(this.employees))
        this.modalRef.hide()
        break;
        case 'update':
          this.employees = this.employees.filter( employee => employee.id != this.employee.id )
          this.employees.push(this.employee)
          localStorage.setItem('employees', JSON.stringify(this.employees))
          this.modalRef.hide()
        break;
        case 'delete':
          this.employees = this.employees.filter( employee => employee.id != this.employee.id )
          console.log( this.employees );
          localStorage.setItem('employees', JSON.stringify(this.employees))
          this.modalRef.hide()
          location.reload();
        break;
    }
  }
}
