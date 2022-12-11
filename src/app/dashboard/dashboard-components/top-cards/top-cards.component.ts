import { Component, OnInit } from '@angular/core';
import { SousAgence } from '../../../models/sous-agence';
import { SousAgenceService } from '../../../services/sous-agence.service';
import { Transaction } from '../../../models/transaction';
import { TransactionService } from '../../../services/transaction.service';

import {topcard,topcards} from './top-cards-data';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-top-cards',
  templateUrl: './top-cards.component.html'
})
export class TopCardsComponent {

  topcards:topcard[];
  datas!:Transaction[];
  agence!:SousAgence[];
  getId:any;
  constructor(private transaction:TransactionService,private sousAgence:SousAgenceService) { 
     
    this.topcards=topcards;
    transaction.getTransaction().subscribe(data=>{
     this.datas=data;
      topcards[0].title=this.datas.length,
      
       sousAgence.getMontantAgence('').subscribe(data=>{
        this.agence=data;
        console.log(data.montant)
         topcards[1].montant=data.montant
        console.log(topcards[1].subtitle+"h j")
      }) 
    
    },
    
    )
    
  }

  

}
