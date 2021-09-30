import { Component, OnInit } from '@angular/core';
import { toast } from 'materialize-css';
import { Router } from '@angular/router';
import { User } from '../../models/UserModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = new User()

  constructor(
    private route: Router,
  ) {}

  ngOnInit(): void {
  }

  login(){
    if((this.user.login == this.user.password) && this.user.password == 'admin'){
      toast({html: 'Login', classes: 'rounded'});
      localStorage.setItem('Auth', 'true')
      this.route.navigate(['/dragons'])
    }else{
      toast({html: 'Usuário ou senha inválido', classes: 'rounded'});
      this.user = new User()
    }
  }

}
