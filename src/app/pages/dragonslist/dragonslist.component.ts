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
  
  dragonsList: Dragons
  dragonsRegister: Dragons

  constructor(
    private dragonService: DragonsService,
    private route: Router
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Auth") != "true"){
      toast({html: 'Realize o Login', classes: 'rounded'});
      this.route.navigate(['/'])
    }
    this.obterDragons()
  }

  obterDragons(){
    this.dragonService.getDragons().subscribe(res => { this.dragonsList = res})
  }

  detalhes(dragon: Dragons){
    this.route.navigate(['/editDragons', dragon.id])
  }

}
