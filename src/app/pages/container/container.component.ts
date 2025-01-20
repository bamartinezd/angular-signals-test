import {Component, computed, inject, OnInit, signal} from '@angular/core';
import { MaterialTableComponent } from '../../components/material-table/material-table.component';
import { ManageUserStore } from '../manage-users/add-user-dialog/add-user-dialog.store';
import {User} from '../manage-users/add-user-dialog/add-user-dialog.models';
import {patchState} from '@ngrx/signals';
import {jsPDF} from 'jspdf';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

@Component({
  selector: 'app-container',
  imports: [MaterialTableComponent, FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})

export class ContainerComponent implements OnInit {
  readonly #store = inject(ManageUserStore);
  protected readonly users = computed(()=>this.#store.users())
  inputValue?: string;

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

  generatePDF(favoriteFood: string) {
    const pdf = new jsPDF();
    pdf.text('Favorite food: ' + favoriteFood, 10, 10);
    pdf.save('HelloWorld.pdf');
  }

  getInputValue() {
    const pdf = new jsPDF();
    pdf.text('Favorite food: ' + this.inputValue, 10, 10);
    pdf.save('HelloWorld.pdf');
  }
}
