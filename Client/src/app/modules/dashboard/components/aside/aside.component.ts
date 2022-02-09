import { Component, OnInit } from '@angular/core';
import data from '../../constants/menu';
import { Menu } from '../../constants/menu';
@Component({
  selector: 'app-aside',
  templateUrl: './aside.component.html',
  styleUrls: ['./aside.component.scss']
})
export class AsideComponent implements OnInit {
  public menu: Menu[] = [];
  constructor() { }

  ngOnInit(): void {
    this.menu = data;
  }

}
