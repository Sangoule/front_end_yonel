import { Component, OnInit } from '@angular/core';
import { SousAgence } from '../../../models/sous-agence';
import { SousAgenceService } from '../../../services/sous-agence.service';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';

import {topcard,topcards} from './top-cards-data';


@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent {

  topcards:topcard[];
  datas!:Transaction[];
  agence!:SousAgence[];
  getId:any;
  login:any;
  id_sous_agence:any;
  sous_agence:any;
  constructor(private transaction:TransactionService,private sousAgence:SousAgenceService) { 
     
    this.login=sessionStorage.getItem('login');
    this.id_sous_agence=sessionStorage.getItem('id_sous_agence')
    this.topcards=topcards;
    transaction.getTransaction().subscribe(data=>{
     this.datas=data;
      topcards[0].title=this.datas.length,
        console.log(this.id_sous_agence);
       
    
    },
    
    
    ),
    sousAgence.getSousAgenceById(this.id_sous_agence).subscribe(data=>{
      this.sous_agence=data;
      console.log(data)
       topcards[1].montant=data.agence.montant;
      console.log(topcards[1].subtitle)
    }) 
    
  }

  

}
