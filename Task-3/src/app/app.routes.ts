import { Routes } from '@angular/router';

import { Route1 } from './pages/route-1/route-1';
import { Route2 } from './pages/route-2/route-2';
import { UserDetail } from './pages/user-detail/user-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'route-1', pathMatch: 'full' },
  { path: 'route-1', component: Route1 },
  { path: 'route-2', component: Route2 },
  { path: 'route-2/user/:userId', component: UserDetail },
];
