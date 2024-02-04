import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './material.module';
import { PipesModule } from './shared/pipes/pipes.module';

import { MessageManagerComponent } from './shared/components/message-manager/message-manager.component';

@NgModule({
  declarations: [
    MessageManagerComponent
  ],
  imports: [
    CommonModule,
    PipesModule,
    MaterialModule,
    RouterModule,
    ReactiveFormsModule,
  ],
  exports: [
    PipesModule,
    MessageManagerComponent
  ],
  providers: [],
})
export class SharedModule { }
