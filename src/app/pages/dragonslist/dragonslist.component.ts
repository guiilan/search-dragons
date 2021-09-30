import { Component, OnInit } from '@angular/core';
import { DragonsService } from '../../services/dragons.service';
import { Dragons } from 'src/app/models/DragonsModel';
import { Router } from '@angular/router';
import { toast } from 'materialize-css';

@Component({
  selector: 'app-dragonslist',
  templateUrl: './dragonslist.component.html',
  styleUrls: ['./dragonslist.component.css']
})
export class DragonslistComponent implements OnInit {
  
  dragonsList: Dragons[]
  dragonsRegister: Dragons

  constructor(
    private dragonService: DragonsService,
    private route: Router
    ) {
      this.dragonsList = [] 
     }

  ngOnInit(): void {
    if(localStorage.getItem("Auth") != "true"){
      toast({html: 'Realize o Login', classes: 'rounded'});
      this.route.navigate(['/'])
    }
    this.obterDragons()
  }

  obterDragons(){
    this.dragonService.getDragons().subscribe((res: any)  => {
       this.dragonsList = res
       this.dragonsList.sort(function (a, b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
      })
  }

  detalhes(dragon: Dragons){
    this.route.navigate(['/editDragons', dragon.id])
  }

}
