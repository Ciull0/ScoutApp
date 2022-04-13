import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  page: any;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getData('scout-app').then((data)=>{
      this.page = data;
    });
  }

}
