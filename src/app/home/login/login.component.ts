import { Component, OnInit } from '@angular/core';
import { AutenticacaoService } from 'src/app/autenticacao/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: string = ''
  password: string = ''

  constructor(private auth: AutenticacaoService) { }

  ngOnInit(): void {
  }


  login() {
    alert(this.user + " " + this.password)
  }

}
