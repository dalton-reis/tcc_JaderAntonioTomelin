import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TouchBrailleTesterPage } from './touch-braille-tester';

@NgModule({
  declarations: [
  TouchBrailleTesterPage,
  ],
  imports: [
    IonicPageModule.forChild(TouchBrailleTesterPage),
  ],
})
export class TouchBrailleTesterPageModule {}
