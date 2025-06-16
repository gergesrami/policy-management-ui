import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { PolicyService } from '../../services/policy';

@Component({
  standalone: true,
  selector: 'app-policy-type-form',
  templateUrl: './policy-type-form.html',
  styleUrls: ['./policy-type-form.css'],
  imports: [CommonModule, ReactiveFormsModule, RouterModule]
})
export class PolicyTypeFormComponent implements OnInit {
  form!: ReturnType<FormBuilder['group']>;

  isEditMode = false;
  policyTypeId!: number;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private service: PolicyService
  ) {

    this.form = this.fb.group({
      name: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id && id !== 'new') {
      this.isEditMode = true;
      this.policyTypeId = +id;
      this.loadPolicyType(this.policyTypeId);
    }
  }

  loadPolicyType(id: number) {
    this.service.getPolicyType(id).subscribe({
      next: (data) => this.form.patchValue(data),
      error: () => {
        alert('Failed to get policy type');
        this.router.navigate(['/policy-types']);
      }
    });
  }

  submitForm() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.isSubmitting = true;

    const data = this.form.value;

    const request = this.isEditMode
      ? this.service.updatePolicyType(this.policyTypeId, data)
      : this.service.createPolicyType(data);

    request.subscribe({
      next: () => this.router.navigate(['/policy-types']),
      error: () => {
        alert('Failed to save');
        this.isSubmitting = false;
      }
    });
  }
}
