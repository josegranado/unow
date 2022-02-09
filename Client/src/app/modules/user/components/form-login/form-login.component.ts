import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { login } from '../../interfaces/login';
@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})

export class FormLoginComponent implements OnInit {
  public disabled: boolean = true;
  public credentials: login;
  constructor(private router: Router) { 
    this.credentials = JSON.parse(<string>localStorage.getItem('credentials'))
  }

  ngOnInit(): void {
  }
  onChange(values: login){
    if ( values.email == '' || values.password == ''){
      this.disabled=  true
    }else{
      this.disabled = false;
    }
  }
  onSubmit(values: login ){
    if ( values.email == this.credentials.email && values.password == this.credentials.password){
      localStorage.setItem('identity', JSON.stringify(values))
      this.router.navigate(['/dashboard']);
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'No te has podido autenticar',
      })
    }
  }
}
