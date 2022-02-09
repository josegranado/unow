import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Client';
ngOnInit(): void {
    let admin = {
      email: 'admin@unow.es',
      password: 'admin123'
    };
    localStorage.setItem('credentials',  JSON.stringify(admin));
}
}
