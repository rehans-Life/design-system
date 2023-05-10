import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModsRoutingModule } from './mods-routing.module';
import { ModsHomeComponent } from './mods-home/mods-home.component';
import { ModalComponent } from './modal/modal.component';
import { SharedModule } from '../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';
import { AccordianComponent } from './accordian/accordian.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [ModsHomeComponent, ModalComponent, AccordianComponent],
  imports: [
    CommonModule,
    ModsRoutingModule,
    SharedModule,
    MatIconModule,
    FontAwesomeModule,
  ],
})
export class ModsModule {}
