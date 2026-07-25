import { Component, computed, input } from '@angular/core';

import { User } from '../../models/user';

@Component({
  selector: 'app-user-card',
  imports: [],
  templateUrl: './user-card.html',
  styleUrl: './user-card.css',
})
export class UserCard {
  user = input.required<User>();

  initials = computed(() => {
    return this.user().name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');
  });

  tagText = computed(() => `@${this.user().username}`);

  role = computed(() => `${this.user().company.name} - ${this.user().address.city}`);

  note = computed(() => this.user().company.catchPhrase);

  websiteUrl = computed(() => `https://${this.user().website}`);

  messageUrl = computed(() => `mailto:${this.user().email}`);

  details = computed(() => {
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
  });
}
