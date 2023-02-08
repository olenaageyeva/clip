import { Injectable } from '@angular/core';

interface IOptions {
  title?: string;
  actionButtonTitle?: string;
  message?: string;
}

interface IModal {
  id: string;
  visible: boolean;
  options: IOptions;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modals: IModal[] = [];

  constructor() { }

  register(id: string) {
    this.modals.push({ id, visible: false, options: {} });
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

  modalOptions(id: string): IOptions {
    return this.findById(id)?.options || {};
  }

  toggleModal(id: string, options: IOptions): void {
    const modal = this.findById(id);
    if (modal) modal.visible = !modal.visible;
    if (modal?.visible) modal.options = options;

  }
}
