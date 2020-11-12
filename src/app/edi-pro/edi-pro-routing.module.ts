import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdiProPage } from './edi-pro.page';

const routes: Routes = [
  {
    path: '',
    component: EdiProPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdiProPageRoutingModule {}
