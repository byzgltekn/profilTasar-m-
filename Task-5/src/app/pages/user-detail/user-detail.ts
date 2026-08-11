import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-user-detail',
  imports: [RouterLink],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail {
  private readonly route = inject(ActivatedRoute);
  private readonly userStorage = inject(UserStorageService);

  userId = Number(this.route.snapshot.paramMap.get('id'));
  user = computed(() => this.userStorage.getUserById(this.userId));

  getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');
  }
}
