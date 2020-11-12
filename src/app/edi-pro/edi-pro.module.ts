import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdiProPageRoutingModule } from './edi-pro-routing.module';

import { EdiProPage } from './edi-pro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdiProPageRoutingModule
  ],
  declarations: [EdiProPage]
})
export class EdiProPageModule {}
