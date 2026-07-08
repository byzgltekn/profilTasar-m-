import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

interface ApiUser {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
  };
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
}

interface ProfileDetail {
  label: string;
  value: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  private readonly http = inject(HttpClient);
  private readonly apiUrl = 'https://jsonplaceholder.typicode.com/users/1';

  user: ApiUser | null = null;
  isLoading = true;
  hasError = false;

  ngOnInit(): void {
    this.http.get<ApiUser>(this.apiUrl).subscribe({
      next: (user) => {
        this.user = user;
        this.isLoading = false;
      },
      error: () => {
        this.hasError = true;
        this.isLoading = false;
      }
    });
  }

  get tagText(): string {
    if (this.hasError) return 'API error';
    return this.user ? `@${this.user.username}` : 'Loading profile';
  }

  get initials(): string {
    if (this.hasError) return '!';
    return this.user ? this.getInitials(this.user.name) : '...';
  }

  get name(): string {
    if (this.hasError) return 'User not found';
    return this.user?.name || 'Loading...';
  }

  get role(): string {
    if (this.hasError) return 'Data could not be loaded';
    if (!this.user) return 'Fetching profile details.';

    return `${this.user.company?.name || 'Company'} · ${this.user.address?.city || 'Location'}`;
  }

  get status(): string {
    if (this.hasError) return 'Unavailable';
    return this.isLoading ? 'Loading' : 'Active';
  }

  get note(): string {
    if (this.hasError) return 'Profile details could not be loaded. Please refresh the page.';
    return this.user?.company?.catchPhrase || 'Loading user details from the API.';
  }

  get details(): ProfileDetail[] {
    return [
      { label: 'Email', value: this.user?.email || '-' },
      { label: 'Phone', value: this.user?.phone || '-' },
      { label: 'Company', value: this.user?.company?.name || '-' },
      { label: 'Location', value: this.formatAddress(this.user?.address) },
      { label: 'Business Focus', value: this.user?.company?.bs || '-' }
    ];
  }

  get websiteText(): string {
    return this.user?.website || 'Website';
  }

  get websiteUrl(): string {
    return this.user?.website ? `https://${this.user.website}` : '#';
  }

  get messageUrl(): string {
    return this.user?.email ? `mailto:${this.user.email}` : '#';
  }

  private getInitials(name: string): string {
    return name
      .split(' ')
      .filter(Boolean)
      .slice(0, 2)
      .map((part) => part[0].toUpperCase())
      .join('');
  }

  private formatAddress(address: ApiUser['address']): string {
    if (!address) return '-';

    return [address.street, address.suite, address.city, address.zipcode]
      .filter(Boolean)
      .join(', ');
  }
}
