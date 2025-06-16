import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PolicyService } from '../../services/policy';

@Component({
  standalone: true,
  selector: 'app-policy-form',
  templateUrl: './policy-form.html',
  styleUrls: ['./policy-form.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class PolicyFormComponent implements OnInit {
  form!: ReturnType<FormBuilder['group']>;

  isEditMode = false;
  policyId!: number;
  policyTypes: any[] = [];
  loading = true;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private policyService: PolicyService
  ) {
    this.form = this.fb.group({
      id: '',
      name: ['', Validators.required],
      description: [''],
      effectiveDate: ['', Validators.required],
      expiryDate: ['', Validators.required],
      policyTypeId: ['', Validators.required],
    });
  }

  formatDateForInput(dateString: string | Date): string {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const day = date.getDate().toString().padStart(2, '0');
    return `${year}-${month}-${day}`;
  }

  ngOnInit(): void {
    this.loadPolicyTypes();

    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEditMode = true;
      this.policyId = +id;
      this.loadPolicy(this.policyId);
    } else {
      this.loading = false;
    }

  }

  loadPolicy(id: number) {
    this.policyService.getPolicy(id).subscribe({
      next: (data) => {
        this.form.patchValue({
          id: data.id,
          name: data.name,
          description: data.description,
          effectiveDate: this.formatDateForInput(data.effectiveDate),
          expiryDate: this.formatDateForInput(data.expiryDate),
          policyTypeId: data.policyTypeId
        });
        this.loading = false;
      },
      error: () => {
        alert('Failed to load policy');
        this.router.navigate(['/policies']);
      }
    });
  }

  loadPolicyTypes() {
    this.policyService.getPolicyTypes().subscribe({
      next: (data) => (this.policyTypes = data),
      error: () => alert('Failed to load policy types')
    });
  }

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const policyData = this.form.value;

    if (this.isEditMode) {
      this.policyService.updatePolicy(this.policyId, policyData).subscribe({
        next: () => this.router.navigate(['/policies']),
        error: () => alert('Update failed')
      });
    } else {
      this.policyService.createPolicy(policyData).subscribe({
        next: () => this.router.navigate(['/policies']),
        error: () => alert('Creation failed')
      });
    }
    this.isSubmitting = false;
  }
}
