import { Routes } from '@angular/router';
import { PolicyListComponent } from './pages/policy-list/policy-list';
import { PolicyFormComponent } from './pages/policy-form/policy-form';

import { PolicyTypeListComponent } from './pages/policy-type-list/policy-type-list';
import { PolicyTypeFormComponent } from './pages/policy-type-form/policy-type-form';

import { LoginComponent } from './pages/login/login';
import { authGuard } from './guards/auth.guard';
import { DbDiagramComponent } from './pages/db-diagram/db-diagram';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: '',
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'policies', pathMatch: 'full' },
      { path: 'policies', component: PolicyListComponent },
      { path: 'policies/new', component: PolicyFormComponent },
      { path: 'policies/:id', component: PolicyFormComponent },
      { path: 'policy-types', component: PolicyTypeListComponent },
      { path: 'policy-types/new', component: PolicyTypeFormComponent },
      { path: 'policy-types/:id', component: PolicyTypeFormComponent },
      { path: 'db-diagram', component: DbDiagramComponent },
    ]
  }
];