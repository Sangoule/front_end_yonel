import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ClientService } from '../../services/client.service';
/**
 * @title Stepper with editable steps
 */

@Component({
  selector: 'app-receive-money',
  templateUrl: './receive-money.component.html',
  styleUrls: ['./receive-money.component.css', './receive-money.component.scss'],
})
export class ReceiveMoneyComponent {
  errmsgshow: any;
  errmsg: string | undefined;
  errmsg1: string | undefined;
  nu = true;
  arriere = false;
  posts: any;
  private searchQuery: string = '';
  public items!: any[];

  constructor(private _formBuilder: FormBuilder, private router: Router, private clientService: ClientService) {
    this.initializeItems();
  
    this.clientService.getClient().subscribe((res) => {
      
      console.log(this.posts);

    });
  }
  clientForm = new FormGroup({
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    prenom: new FormControl(),
    nom: new FormControl(),
    lieu_naissance: new FormControl(),
    birthdate: new FormControl()
  })

  newUser() {
    this.nu = false;
    this.arriere = true
  }
  goBack() {
    this.arriere = false;
    this.nu = true;
  }
  //permet de rechercher une personne via sont numéro de téléphone

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
  initializeItems() {
    this.items = this.posts;
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
