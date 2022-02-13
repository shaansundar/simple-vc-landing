import { Component, OnInit } from '@angular/core';
import data from '../fill-data-here.json';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.css']
})
export class BlogListComponent implements OnInit {
  public blogs: any = data.langEn.blogList;
  constructor() { }

  ngOnInit(): void {
  }

}
