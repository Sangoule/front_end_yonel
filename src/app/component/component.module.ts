import { Inject, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';

import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { ReceiveMoneyComponent } from './receive-money/receive-money.component';
import { TransactionService } from '../services/transaction.service';
import { PersonnesComponent } from './personnes/personnes.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  
  declarations: [
      ListeTransactionComponent,
      SendMoneyComponent,
      ReceiveMoneyComponent,
      PersonnesComponent
  ]
})
export class ComponentsModule { 
  datas!:any;
  constructor(private transaction:TransactionService) { 
  }
  getAllTransaction(){
    console.log(this.transaction);
    this.transaction.getTransaction()
    .subscribe(data=>{
      this.datas=data;
      console.log(this.datas+" "+data);
    },
    err=>{
      console.log(err);
    }
    );
  console.log(this.datas+"  Bonjours");
  }
  
}
