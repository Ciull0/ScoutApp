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
  levels: any = {};

  constructor(
    private data: DataService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {

      this.data.getData(params.team).then((data)=>{
        this.team = data;
        
        
        this.team.members.forEach(member => {
          this.levels[member.level] == undefined ? this.levels[member.level] = [] : this.levels[member.level] = this.levels[member.level];
          this.levels[member.level].push(member);
        });
        this.levels = Object.entries(this.levels);
        this.levels.forEach(element => {
          element[1]['isOpen'] = false;
        });
        console.log(this.levels);
      });
    });
  }

}
