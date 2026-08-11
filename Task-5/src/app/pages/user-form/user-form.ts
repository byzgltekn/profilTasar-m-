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

  userId = Number(this.route.snapshot.paramMap.get('id'));
  isEditMode = Boolean(this.userId);
  existingUser = computed(() => this.userStorage.getUserById(this.userId));

  form: UserFormValue = this.getInitialFormValue();

  saveUser(): void {
    if (this.isEditMode) {
      this.userStorage.updateUser(this.userId, this.form);
      this.router.navigate(['/users', this.userId]);
      return;
    }

    const user = this.userStorage.addUser(this.form);
    this.router.navigate(['/users', user.id]);
  }

  private getInitialFormValue(): UserFormValue {
    const user = this.userStorage.getUserById(this.userId);

    if (user) {
      const { id, ...formValue } = user;
      return formValue;
    }

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
