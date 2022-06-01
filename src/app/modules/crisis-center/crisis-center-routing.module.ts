import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CrisisCenterHomeComponent } from 'src/app/components/crisis-center-home/crisis-center-home.component';
import { CrisisCenterComponent } from 'src/app/components/crisis-center/crisis-center.component';
import { CrisisDetailComponent } from 'src/app/components/crisis-detail/crisis-detail.component';
import { CrisisListComponent } from 'src/app/components/crisis-list/crisis-list.component';


const crisisCenterRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {
            path: ':id',
            component: CrisisDetailComponent
          },
          {
            path: '',
            component: CrisisCenterHomeComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(crisisCenterRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class CrisisCenterRoutingModule { }
