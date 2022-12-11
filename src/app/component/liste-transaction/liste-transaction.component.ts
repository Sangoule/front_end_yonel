import { CommonModule } from '@angular/common';
import { Component,NgModule,OnInit } from '@angular/core';
import { Transaction } from '../../models/transaction';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-liste-transaction',
  templateUrl: 'liste-transaction.component.html',
})

export class ListeTransactionComponent {
  title: string = 'Transfert';
  datas!:Transaction[];
  constructor(private transaction:TransactionService) { 
    transaction.getTransaction().subscribe(data=>{
      this.datas=data;
      console.log(this.datas);
    })
  }
 
  }
  


