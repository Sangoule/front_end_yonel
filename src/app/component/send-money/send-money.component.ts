import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, EmailValidator } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
import { SousAgence } from '../../models/sous-agence';
import { SousAgenceService } from '../../services/sous-agence.service';
import {PaysService} from '../../services/pays.service';
@Component({
  templateUrl: 'send-money.component.html',
  styleUrls: ['./receive-money.component.css', './receive-money.component.scss']
})
export class SendMoneyComponent{
  TEnvoi = [
    {name: 'Na', abbrev: 'Nationale'},
    {name: 'Int', abbrev: 'Internationnale'},
  ];
  errmsgshow: any;
  errmsg: string | undefined;
  errmsg1: string | undefined;
  errmsg4:string | undefined;
  errmt1:string|undefined
  errmt2:string | undefined
  nu = true;
  showWarn=false;
  back = 10;
  clientbp: any;
  client_dest:any;
  type_envoie?:boolean
  soumettre=false
  public items!: any[];
  tel=false
  stape=0;
  step1=false
  step2=false
  step3=false
  step4=false
  step5=false
  login!:any
  id_sous_agence!:any
  agence!:SousAgence[];
  sous_agence!:any
  test_montant=false
  pays_dest!:any
  constructor(private _formBuilder: FormBuilder, private router: Router, private clientService: ClientService,private sousAgence:SousAgenceService,private pays:PaysService) {
   
  }
  clientForm = new FormGroup({
    email: new FormControl('', Validators.email),
    phone: new FormControl('', Validators.minLength(9)),
    prenom: new FormControl(),
    nom: new FormControl(),
    lieu_naissance: new FormControl(),
    birthdate: new FormControl(),
    t_envoi: new FormControl(this.TEnvoi[1],Validators.required),
    phone2: new FormControl('', Validators.minLength(9)),
    pays:new FormControl(),
    montant:new FormControl()
  })
// les fonctions de navigations
  newUser() {
    this.nu = false;

    this.step1=true
  }
  nextUser() {
    this.step2=true
    this.stape++
    this.soumettre=true

  }
  goBack() {
    this.nu = true;
  }
  //Enregistrer un nouveaux utilisateur
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
        this.step3=true
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
  rechercheTel_dest() {
    if (this.clientForm.value.phone2!='') {
      if(this.clientForm.value.phone2==this.clientForm.value.phone){
       
          this.errmsg4 = 'Bounou Fonto';
        
      }
      console.log(this.clientForm.value.phone);

      this.clientService.getClientByPhone(this.clientForm.value.phone2).subscribe((res) => {
        if (res!=null) {
          this.client_dest=res
          console.log(this.client_dest.phone2+" Bouma rousslo")
        }
        // else {this.errmsgshow = true;this.errmsg1="Verifiez vos identifiants"}
      })
      console.log(this.client_dest+" Thie rousloma nga deuk")
      if(this.client_dest==''){
        this.errmsgshow = true;
        this.errmsg4 = ' Numéro déstinataire pas Enregistrer';
      }
      this.step5=true

    }
    else {
      this.errmsgshow = true;
      if (this.clientForm.valid == null) {
        this.errmsg = 'All field required';
      }
      //else if (this.loginForm.){this.errmsg1 = " Verifiez Vos Identifiants";}
    }
  }
  
  recepteur(){
      this.step4=true
      this.step3=false
      this.step2=false
      this.step1=false
      this.pays.getAllPays().subscribe(data=>{
        this.pays_dest=data;
        console.log(data)
      })
  }
  registerRecepteur(){
    this.soumettre = true
  }
  verification_montant(){
    
    this.login=sessionStorage.getItem('login');
    this.id_sous_agence=sessionStorage.getItem('id_sous_agence')
    console.log("sa login bangi "+ this.login)
    this.sousAgence.getSousAgenceById(this.id_sous_agence).subscribe(data=>{
      this.sous_agence=data;
      console.log(data)
       if(data.agence.montant<this.clientForm.value.montant){
          this.errmsgshow=true;
          this.errmt1="Solde Insuffisant"
       }
       else{
          
       }
      
    }) 
  }

}
