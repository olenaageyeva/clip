import { Component, OnDestroy, OnInit, Input } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-sample-modal',
  templateUrl: './sample-modal.component.html',
  styleUrls: ['./sample-modal.component.scss'],
})
export class SampleModalComponent implements OnInit, OnDestroy {

  @Input() message: string = "";
  @Input() title = "My Sample Modal";
  @Input() actionButtonTitle = "Click";

  constructor(public modal: ModalService) { }

  ngOnInit(): void {
    this.modal.register('sample');
  }

  ngOnDestroy(): void {
    this.modal.unregister('sample');
  }
}
