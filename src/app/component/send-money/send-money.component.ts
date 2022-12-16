import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
@Component({
  
  templateUrl: 'send-money.component.html',
  styleUrls: ['./receive-money.component.css', './receive-money.component.scss']

})
export class SendMoneyComponent{
  TEnvoi = [
    {name: 'Arizona', abbrev: 'Nationale'},
    {name: 'California', abbrev: 'Internationnale'},
  ];
  errmsgshow: any;
  errmsg: string | undefined;
  errmsg1: string | undefined;
  nu = true;
  showWarn=false;
  back = 10;
  clientbp: any;
  type_envoie?:boolean
  soumettre=false
  public items!: any[];
  tel=false
  stape=0;
  step1=false
  step2=false

  constructor(private _formBuilder: FormBuilder, private router: Router, private clientService: ClientService) {
    this.initializeItems();
    
  }
  clientForm = new FormGroup({
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.minLength(9)),
    prenom: new FormControl(),
    nom: new FormControl(),
    lieu_naissance: new FormControl(),
    birthdate: new FormControl(),
    t_envoi: new FormControl(this.TEnvoi[1],Validators.required),
  })

  newUser() {
    this.nu = false;
    console.log(this.stape+" First")
    this.step1=true
    console.log(this.stape+ "Second")
  }
  nextUser() {
    console.log(this.stape+" nnnn First")
    this.step2=true
    this.stape++
    this.soumettre=true
    console.log(this.stape+" nnnnn second")
  }
  goBack() {
    
    this.nu = true;
  }
  clientSubmit() {

    if (this.clientForm.valid) {
      console.log(this.clientForm.value);
      this.clientService.creerClient(this.clientForm.value).subscribe((res) => {
        if (res != null) {
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
      if (this.clientForm.valid == null) {
        this.errmsg = 'All field required';
      }
      //else if (this.loginForm.){this.errmsg1 = " Verifiez Vos Identifiants";}
    }
  }
  // rechercher un client avec phone
  rechercheTel() {
    if (this.clientForm.value.phone!='') {
      console.log(this.clientForm.value.phone);
      this.clientService.getClientByPhone(this.clientForm.value.phone).subscribe((res) => {
        if (res!=null) {
          this.clientbp=res
          console.log(this.clientbp.phone+" Bouma rousslo")
          this.tel=true
        }
        // else {this.errmsgshow = true;this.errmsg1="Verifiez vos identifiants"}
        this.stape++
      })

    }
    else {

      this.errmsgshow = true;
      if (this.clientForm.valid == null) {
        this.errmsg = 'All field required';
      }
      //else if (this.loginForm.){this.errmsg1 = " Verifiez Vos Identifiants";}
    }
  }
  initializeItems() {
    this.items = this.clientbp;
  }
  registerRecepteur(){
    this.soumettre = true
  }
  getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.phone.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }


  }
}
