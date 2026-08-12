import { FormsModule } from '@angular/forms';
import { Component, computed, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

import { UserFormValue } from '../../models/user';
import { UserStorageService } from '../../services/user-storage.service';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, RouterLink],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {
  private readonly route = inject(ActivatedRoute);
  private readonly router = inject(Router);
  private readonly userStorage = inject(UserStorageService);

  username = this.route.snapshot.paramMap.get('username') ?? '';
  isEditMode = Boolean(this.username);
  existingUser = computed(() => this.userStorage.getUserByUsername(this.username));
  usernameError = '';

  form: UserFormValue = this.getInitialFormValue();

  saveUser(): void {
    this.usernameError = '';

    if (this.userStorage.isUsernameTaken(this.form.username, this.username)) {
      this.usernameError = 'This username is already used by another user.';
      return;
    }

    if (this.isEditMode) {
      const user = this.userStorage.updateUser(this.username, this.form);
      this.router.navigate(['/users', user?.username ?? this.form.username]);
      return;
    }

    const user = this.userStorage.addUser(this.form);
    this.router.navigate(['/users', user.username]);
  }

  private getInitialFormValue(): UserFormValue {
    const user = this.userStorage.getUserByUsername(this.username);

    if (user) {
      const { id, ...formValue } = user;
      return formValue;
    }

    return this.createEmptyFormValue();
  }

  private createEmptyFormValue(): UserFormValue {
    return {
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    };
  }
}
