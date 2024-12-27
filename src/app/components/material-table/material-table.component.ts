import { Component, Input, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import {User} from '../../pages/manage-users/add-user-dialog/add-user-dialog.models';

@Component({
  selector: 'app-material-table',
  imports: [MatTableModule],
  templateUrl: './material-table.component.html',
  styleUrl: './material-table.component.sass'
})

export class MaterialTableComponent implements OnInit {

  @Input() users: User[] = [];

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'passportNumber', 'dateOfBirth', 'actions'];
  dataSource = this.users;

  ngOnInit(): void {
    this.dataSource = this.users;
  }
}
