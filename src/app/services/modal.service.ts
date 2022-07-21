import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private visible = false;

  constructor() {}

  isModalOpen() {
    console.log('status', this.visible);
    return this.visible;
  }

  toggleModal() {
    this.visible = !this.visible;
    console.log('modal status changed', this.visible);
  }
}
