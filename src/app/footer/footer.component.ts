import { Component } from '@angular/core';
import { ModalService } from '../services/modal.service';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'], 
})
export class FooterComponent {

  constructor(public modal: ModalService) {}

  openModal($event: Event, id: string) {
    $event.preventDefault();
    this.modal.toggleModal(id, {title: "Footer Sample"});
  }
}
