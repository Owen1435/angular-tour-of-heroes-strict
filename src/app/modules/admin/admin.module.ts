import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import {AdminDashboardComponent} from "../../components/admin-dashboard/admin-dashboard.component";
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { ManageCrisesComponent } from 'src/app/components/manage-crises/manage-crises.component';
import {ManageHeroesComponent} from "../../components/manage-heroes/manage-heroes.component";


@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminComponent,
    ManageCrisesComponent,
    ManageHeroesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
