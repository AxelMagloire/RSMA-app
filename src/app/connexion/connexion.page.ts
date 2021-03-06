import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.page.html',
  styleUrls: ['./connexion.page.scss'],
})
export class ConnexionPage implements OnInit {
  email
  password
  token

  ngOnInit() {
  }

  constructor(private router: Router) { }


  Connexion(){

    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "identifier": this.email,
  "password": this.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
};

fetch("http://localhost:1337/api/auth/local", requestOptions)
  .then(response => response.json())
  .then(result => { this.token = result
    console.log(this.token)
     if (this.token.jwt){
       this.navigate()
     }
   })

  .catch(error => console.log('error', error));

  }

  navigate(){

    this.router.navigate(['/home'])
  }
  goInscription(){
    this.router.navigate(['/inscription'])
  }


}
