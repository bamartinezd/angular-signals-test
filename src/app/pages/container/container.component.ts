import {Component, computed, inject, OnInit, signal} from '@angular/core';
import { MaterialTableComponent } from '../../components/material-table/material-table.component';
import { ManageUserStore } from '../manage-users/add-user-dialog/add-user-dialog.store';
import {User} from '../manage-users/add-user-dialog/add-user-dialog.models';
import {patchState} from '@ngrx/signals';

@Component({
  selector: 'app-container',
  imports: [MaterialTableComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})

export class ContainerComponent implements OnInit {

  readonly #store = inject(ManageUserStore);
  protected readonly users = computed(()=>this.#store.users())

  ngOnInit(): void {
    this.#store.users;
  }

  addUser(){

    alert("you clicked Add User!")

    this.#store.addUser({
      id: 3,
      firstName: "Alejandro",
      lastName: "Martinez Delgado",
      passportNumber: "AT5353",
      dateOfBirth: new Date()
    });
  }
}
