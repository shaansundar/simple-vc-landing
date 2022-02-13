import { Component, OnInit } from '@angular/core';
import data from '../fill-data-here.json';

@Component({
  selector: 'app-launchpad',
  templateUrl: './launchpad.component.html',
  styleUrls: ['./launchpad.component.css']
})
export class LaunchpadComponent implements OnInit {
  constructor() { }
  public cards: any = data.langEn.cards;
  ngOnInit(): void {
  }

}
