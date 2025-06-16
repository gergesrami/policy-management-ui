import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { PolicyService, Policy } from '../../services/policy';

@Component({
  standalone: true,
  selector: 'app-policy-list',
  imports: [CommonModule, RouterModule],
  templateUrl: './policy-list.html',
  styleUrls: ['./policy-list.css']
})

export class PolicyListComponent implements OnInit {
  policies: Policy[] = [];
  loading = true;
  errorMessage : string | null = null;

  constructor(private policyService: PolicyService, private router: Router) { }

  ngOnInit(): void {
    this.loadPolicies();
  }

  loadPolicies() {
    this.policyService.getPolicies().subscribe({
      next: (data) => {
        this.policies = data;
        this.loading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load policies.error: ' + JSON.stringify(err);
        this.loading = false;
      }
    });
  }

  deletePolicy(id: number) {
    if (!confirm('Are you sure you want to delete this policy?')) return;

    this.policyService.deletePolicy(id).subscribe({
      next: () => this.loadPolicies(),
      error: () => alert('Failed to delete policy.')
    });
  }

  editPolicy(id: number) {
    this.router.navigate(['/policies', id]);
  }

  addNewPolicy() {
    this.router.navigate(['/policies/new']);
  }
}
