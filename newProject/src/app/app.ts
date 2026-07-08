import { Component } from '@angular/core';

interface ProfileDetail {
  label: string;
  value: string;
}

interface ProfileLink {
  text: string;
  url: string;
}

interface ProfileCard {
  tag: string;
  initials: string;
  name: string;
  role: string;
  status: string;
  note: string;
  details: ProfileDetail[];
  linkedin: ProfileLink;
  messageUrl: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  profile: ProfileCard = {
    tag: 'Aktif stajyer',
    initials: 'BG',
    name: 'Beyza Gültekin',
    role: 'Ürün Tasarım Stajyeri · Ankara',
    status: 'Aktif',
    note: 'Tasarım ekibiyle ürün arayüzleri ve kullanıcı akışları üzerinde çalışıyor.',
    details: [
      { label: 'E-posta', value: 'beyza.gultekin@mail.com' },
      { label: 'Telefon', value: '+90 555 000 00 00' },
      { label: 'Departman', value: 'Ürün ve Tasarım' },
      { label: 'Konum', value: 'Ankara, Türkiye' }
    ],
    linkedin: {
      text: 'LinkedIn profili',
      url: 'https://www.linkedin.com'
    },
    messageUrl: 'mailto:beyza.gultekin@mail.com'
  };
}
