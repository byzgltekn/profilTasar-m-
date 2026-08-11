import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';

import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css',
})
export class UserList {
  private readonly userStorage = inject(UserStorageService);

  users = this.userStorage.users;
}
