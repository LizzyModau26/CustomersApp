import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ResViewPage } from './res-view.page';

const routes: Routes = [
  {
    path: '',
    component: ResViewPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResViewPageRoutingModule {}
