import { Component, OnInit } from '@angular/core';
import { ModalService } from '../services/modal.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor(public modal: ModalService) { }

  ngOnInit(): void { }

  openModal($event: Event, id: string) {
    $event.preventDefault();
    this.modal.toggleModal(id, { title: id === 'auth' ? '' : ' Nav Title', actionButtonTitle: id === 'auth' ? '' : 'Boom!', message: id==='auth' ?'' : "Here is a custom message"});
  }


}
