import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],

})
export class UserComponent implements OnInit {

  errmsgshow: any;
  errmsg!: string;
  errmsg1: string | undefined;
  stat!:string

  constructor(private router: Router, private userService: UserService,private alertService: AlertService) { }

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
        this.stat=this.userService.code
        console.log(this.userService.code+ "sama code")
        if (res!= null ) {
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
        
      
      })

    }
    else {
      console.log(this.loginForm.value.login +"Diap si waye")
      this.errmsgshow=true
      if(this.loginForm.value.login==''){
        this.errmsg = 'Login incorect ';
      }
      if(this.loginForm.value.password==''){
        
        this.errmsg1='Mot de passe incorect'
      }
      
    }
    console.log(this.userService.code+" Lou bon")
  }

}

