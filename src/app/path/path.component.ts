import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  team: any;
  level_1: any = [];
  level_2: any = [];
  level_3: any  = [];

  constructor(
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.data.getData(params.team).then((data)=>{
        this.team = data;
        
        this.team.members.forEach(member => {
          if (member.level == 1) {
            this.level_1.push(member);
          }
          else if (member.level == 2) {
            this.level_2.push(member);
          }
          else if (member.level == 3) {
            this.level_3.push(member);
          }
        });
      });
    });
  }

}
