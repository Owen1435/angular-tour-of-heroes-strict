import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterHomeComponent } from 'src/app/modules/crisis-center/components/crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from 'src/app/modules/crisis-center/components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from 'src/app/modules/crisis-center/components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from 'src/app/modules/crisis-center/components/crisis-list/crisis-list.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';

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
  ]
})
export class CrisisCenterModule { }
