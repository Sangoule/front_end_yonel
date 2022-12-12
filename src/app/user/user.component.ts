import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  errmsgshow: any;
  errmsg: string | undefined;
  errmsg1: string | undefined;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(){
  }
    loginForm = new FormGroup({
    login: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })


  loginSubmit() {

    if (this.loginForm.valid) {
      console.log(this.loginForm.value.login, this.loginForm.value.password);
      this.userService.login(this.loginForm.value).subscribe((res) => {
        if (res!= null) {
          console.log(res, 'ress')
          sessionStorage.setItem('login',res.login);
          sessionStorage.setItem('id_sous_agence',res.sousAgenceCodeSousAgence);
          //sessionStorage.setItem('')
          sessionStorage.setItem('token',res.token);
         // apres je vais ajouter ici la securisation 
          this.router.navigate(['/dashboard']).then(() => {
            window.location.reload();
          })
        }
       // else {this.errmsgshow = true;this.errmsg1="Verifiez vos identifiants"}
      
      })

    }
    else {

      this.errmsgshow = true;
      if(this.loginForm.valid==null){
        this.errmsg = 'All field required';
      }
      //else if (this.loginForm.){this.errmsg1 = " Verifiez Vos Identifiants";}
    }
  }

}

