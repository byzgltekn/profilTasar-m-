import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { timeout } from 'rxjs';

import { UserCard } from '../../components/user-card/user-card';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-detail',
  imports: [RouterLink, UserCard],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
  private readonly route = inject(ActivatedRoute);
  private readonly userService = inject(UserService);

  user = signal<User | null>(null);
  isLoading = signal(true);
  hasError = signal(false);

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));

    if (!userId) {
      this.hasError.set(true);
      this.isLoading.set(false);
      return;
    }

    this.userService.getUserById(userId).pipe(timeout(8000)).subscribe({
      next: (user) => {
        this.user.set(user);
        this.isLoading.set(false);
      },
      error: () => {
        this.hasError.set(true);
        this.isLoading.set(false);
      },
    });
  }
}
