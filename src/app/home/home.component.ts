import { Component, Input, OnInit } from '@angular/core';
import data from '../fill-data-here.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title : string = data.langEn.company;

  constructor() { }

  ngOnInit(): void {
  }

}
