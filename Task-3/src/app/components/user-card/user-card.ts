import { Component, input } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  user = input.required<User>();

  get initials(): string {
    return this.user().name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');
  }

  get tagText(): string {
    return `@${this.user().username}`;
  }

  get role(): string {
    return `${this.user().company.name} - ${this.user().address.city}`;
  }

  get note(): string {
    return this.user().company.catchPhrase;
  }

  get websiteUrl(): string {
    return `https://${this.user().website}`;
  }

  get messageUrl(): string {
    return `mailto:${this.user().email}`;
  }

  get details(): { label: string; value: string }[] {
    const user = this.user();

    return [
      { label: 'Email', value: user.email },
      { label: 'Phone', value: user.phone },
      { label: 'Company', value: user.company.name },
      { label: 'Street', value: user.address.street },
      { label: 'Suite', value: user.address.suite },
      { label: 'City', value: user.address.city },
      { label: 'Zip code', value: user.address.zipcode },
      { label: 'Latitude', value: user.address.geo.lat },
      { label: 'Longitude', value: user.address.geo.lng },
      { label: 'Business focus', value: user.company.bs },
    ];
  }
}
