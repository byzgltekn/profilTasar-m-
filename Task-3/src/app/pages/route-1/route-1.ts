import { Component, OnInit, inject, signal } from '@angular/core';
import { timeout } from 'rxjs';

import { UserCard } from '../../components/user-card/user-card';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-route-1',
  imports: [UserCard],
  templateUrl: './route-1.html',
  styleUrl: './route-1.css',
})
export class Route1 implements OnInit {
  private readonly userService = inject(UserService);

  users = signal<User[]>([]);
  selectedUser = signal<User | null>(null);
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

  selectUser(user: User): void {
    this.selectedUser.set(user);
  }
}
