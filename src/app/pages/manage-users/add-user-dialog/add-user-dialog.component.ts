import { Component, inject } from '@angular/core';
import { ManageUserStore } from './add-user-dialog.store';

@Component({
  selector: 'app-add-user-dialog',
  imports: [],
  templateUrl: './add-user-dialog.component.html',
  styles: ``
})
export class AddUserDialogComponent {
  readonly #store = inject(ManageUserStore);
}