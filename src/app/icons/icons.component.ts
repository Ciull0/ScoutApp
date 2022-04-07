import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  
  @Input() icon: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.icon, this.icon=="'scout'")
  }

}
