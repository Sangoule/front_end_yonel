import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ComponentsRoutes } from './component.routing';

import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { SendMoneyComponent } from './send-money/send-money.component';
import { ReceiveMoneyComponent } from './receive-money/receive-money.component';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  declarations: [

    ListeTransactionComponent,
      SendMoneyComponent,
      ReceiveMoneyComponent
  ]
})
export class ComponentsModule { }
