import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-path',
  templateUrl: './path.component.html',
  styleUrls: ['./path.component.scss']
})
export class PathComponent implements OnInit {

  team: any = undefined;
  levels: any = {};
  currentMember: any = undefined;

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
      });
    });
  }

  getRandomPosition(){
    return {
      'top': Math.floor(Math.random() * 100 -10) + '%',
      'left': Math.floor(Math.random() * 100 -10) + '%'
    }
  }

}
