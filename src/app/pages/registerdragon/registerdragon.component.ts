import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Dragons } from 'src/app/models/DragonsModel';
import { DragonsService } from 'src/app/services/dragons.service';
import { toast } from 'materialize-css';

@Component({
  selector: 'app-registerdragon',
  templateUrl: './registerdragon.component.html',
  styleUrls: ['./registerdragon.component.css']
})
export class RegisterdragonComponent implements OnInit {

  dragon : Dragons = new Dragons()
  delete: boolean = false

  constructor(
    private dragonService: DragonsService,
    private router: Router,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    if(localStorage.getItem("Auth") != "true"){
      toast({html: 'Realize o Login', classes: 'rounded'});
      this.router.navigate(['/'])
    }
    if(parseInt(this.route.snapshot.paramMap.get('id'))){
      this.dragonService.getDragon(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe( res => {this.dragon = res})
      this.delete = true
    }
  }

  cancel(){
    this.router.navigate(['/dragons'])
  }

  deleteDragon(){
    this.dragonService.deletedragon(parseInt(this.route.snapshot.paramMap.get('id'))).subscribe( res => {
      toast({html: 'Dragão Deletado', classes: 'rounded'});
      this.router.navigate(['/dragons'])
    })
  }

  createDragon(){
    this.dragonService.createDragons(this.dragon).subscribe(res => {
      toast({html: 'Dragão Criado Com Sucesso!', classes: 'rounded'});
      this.router.navigate(['/dragons'])
    })
  }

  updateDragon(){
    this.dragonService.updatedragon(this.dragon).subscribe(res => {
      toast({html: 'Dragão Atualizado Com Sucesso!', classes: 'rounded'});
      this.router.navigate(['/dragons'])
    })
  }

}
