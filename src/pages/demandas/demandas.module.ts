import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DemandasPage } from './demandas';

@NgModule({
  declarations: [
    DemandasPage,
  ],
  imports: [
    IonicPageModule.forChild(DemandasPage),
  ],
})
export class DemandasPageModule {}
