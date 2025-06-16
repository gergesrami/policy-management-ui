import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PolicyService, PolicyType } from '../../services/policy';

@Component({
  standalone: true,
  selector: 'app-policy-type-list',
  templateUrl: './policy-type-list.html',
  styleUrls: ['./policy-type-list.css'],
  imports: [CommonModule, RouterModule]
})
export class PolicyTypeListComponent implements OnInit {
  policyTypes: PolicyType[] = [];
  loading = true;
  error: string | null = null;

  constructor(private service: PolicyService) { }

  ngOnInit(): void {
    this.loadPolicyTypes();
  }

  loadPolicyTypes() {
    this.service.getPolicyTypes().subscribe({
      next: (data) => {
        this.policyTypes = data;
        this.loading = false;
      },
      error: (err) => {
        this.error = 'Failed to load policy types';
        this.loading = false;
      }
    });
  }

  delete(id: string) {
    if (!confirm('Delete this policy type? Deleting this policy type will remove all the policies under it!')) return;
    this.service.deletePolicyType(id).subscribe({
      next: () => this.loadPolicyTypes(),
      error: () => alert('Delete failed')
    });
  }
}
