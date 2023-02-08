import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { SampleModalComponent } from '../modal-sample/sample-modal.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AuthModalComponent,  SampleModalComponent],
  imports: [CommonModule, SharedModule],
  exports: [AuthModalComponent, SampleModalComponent],
})
export class UserModule {}
