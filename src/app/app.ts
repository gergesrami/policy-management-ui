import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgIf, NgFor } from '@angular/common';
import { AuthService } from './services/auth';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, NgIf, NgFor], 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  auth = inject(AuthService);

  navLinks = [
    { path: '/db-diagram', label: 'Database' },
    { path: '/policies', label: 'Policies' },
    { path: '/policies/new', label: 'Create Policy' },
    { path: '/policy-types', label: 'Policy Types' },
    { path: '/policy-types/new', label: 'Create Policy Type' }
  ];
}
