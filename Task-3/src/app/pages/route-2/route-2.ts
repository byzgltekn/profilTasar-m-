import { Component, OnInit, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { timeout } from 'rxjs';

import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-route-2',
  imports: [RouterLink],
  templateUrl: './route-2.html',
  styleUrl: './route-2.css',
})
export class Route2 implements OnInit {
  private readonly userService = inject(UserService);

  users = signal<User[]>([]);
  isLoading = signal(true);
  hasError = signal(false);

  ngOnInit(): void {
    this.userService.getUsers().pipe(timeout(8000)).subscribe({
      next: (users) => {
        this.users.set(users);
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.isLoading.set(false);
      },
    });
  }
}
