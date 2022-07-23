import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() {}

  register(id: string) {
    this.modals.push({ id, visible: false });
  }

  unregister(id: string) {
    this.modals = this.modals.filter((element) => element.id !== id);
  }

  findById(id: string) {
    return this.modals.find((element) => element.id === id);
  }

  isModalOpen(id: string): boolean {
    return !!this.findById(id)?.visible;
  }

  toggleModal(id: string): void {
    const modal = this.findById(id);
    if (modal) modal.visible = !modal.visible;
  }
}
