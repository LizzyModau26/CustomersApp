import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ResViewPageRoutingModule } from './res-view-routing.module';

import { ResViewPage } from './res-view.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ResViewPageRoutingModule
  ],
  declarations: [ResViewPage]
})
export class ResViewPageModule {}
