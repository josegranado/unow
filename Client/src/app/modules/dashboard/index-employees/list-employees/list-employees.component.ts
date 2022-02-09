import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit {
  public modalRef: BsModalRef;
  public employees;
  public employee;
  constructor(
    private modalService:BsModalService
  ) {
    if( !localStorage.getItem('employees')){
      localStorage.setItem('employees', JSON.stringify([]))
      this.employees = [];
    }else{
      this.employees = JSON.parse(localStorage.getItem('employees'));
    }
  }

  ngOnInit(): void {
  }
  save(modal: TemplateRef<any>):void{
      this.modalRef = this.modalService.show(modal)
  }
  action(employee, modal: TemplateRef<any>):void{
    this.employee = employee;
    this.modalRef = this.modalService.show(modal);
  }
  
}
