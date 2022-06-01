import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { CrisisCenterHomeComponent } from 'src/app/components/crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from 'src/app/components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from 'src/app/components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from 'src/app/components/crisis-list/crisis-list.component';
import { CrisisCenterRoutingModule } from './crisis-center-routing.module';

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
  ]
})
export class CrisisCenterModule { }
