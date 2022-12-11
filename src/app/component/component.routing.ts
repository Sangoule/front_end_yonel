import { RouterModule, Routes } from '@angular/router';
import {  NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { ListeTransactionComponent } from './liste-transaction/liste-transaction.component';
import { ReceiveMoneyComponent } from './receive-money/receive-money.component';
import { SendMoneyComponent } from './send-money/send-money.component';


export const ComponentsRoutes: Routes = [
	{
		path: '',
		children: [
			
			{
				path: 'liste-transaction',
				component: ListeTransactionComponent,
			},
			{
				path: 'send-money',
				component: SendMoneyComponent
			},
			{
				path: 'receive-money',
				component: ReceiveMoneyComponent
			},


		]
	}
];
