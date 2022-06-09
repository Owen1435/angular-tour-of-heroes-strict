import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterHomeComponent } from 'src/app/crisis-center/components/crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from 'src/app/crisis-center/components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from 'src/app/crisis-center/components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from 'src/app/crisis-center/components/crisis-list/crisis-list.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {DialogService} from "./services/dialog.service";
import {CrisisDetailResolver} from "./resolvers/crisis-detail.resolver";
import {CrisisService} from "./services/crisis.service";

@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule,
    MatButtonModule,
    MatInputModule
  ],
  providers: [
    CrisisDetailResolver,
    CrisisService,
    DialogService
  ]
})
export class CrisisCenterModule { }
