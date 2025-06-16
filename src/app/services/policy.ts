import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

export interface Policy {
  id: number;
  name: string;
  description?: string;
  effectiveDate: string;
  expiryDate: string;
  policyTypeId: string;
}

export interface PolicyType {
  id: string;
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PolicyService {
  private policiesBaseUrl = `${environment.apiUrl}/policies`;
  private policyTypesBaseUrl = `${environment.apiUrl}/policytypes`;

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]> {
    var allPolicies = this.http.get<Policy[]>(this.policiesBaseUrl);
    return allPolicies
  }

  getPolicy(id: number): Observable<Policy> {
    return this.http.get<Policy>(`${this.policiesBaseUrl}/${id}`);
  }

  createPolicy(data: any): Observable<any> {
    return this.http.post(this.policiesBaseUrl, data);
  }

  updatePolicy(id: number, data: any): Observable<any> {
    return this.http.put(`${this.policiesBaseUrl}/${id}`, data);
  }

  deletePolicy(id: number): Observable<any> {
    return this.http.delete(`${this.policiesBaseUrl}/${id}`);
  }

  //policy types ---
  getPolicyTypes(): Observable<PolicyType[]> {
    return this.http.get<PolicyType[]>(this.policyTypesBaseUrl);
  }

  getPolicyType(id: number): Observable<PolicyType> {
    return this.http.get<PolicyType>(`${this.policyTypesBaseUrl}/${id}`);
  }

  createPolicyType(data: Partial<PolicyType>): Observable<PolicyType> {
    return this.http.post<PolicyType>(this.policyTypesBaseUrl, data);
  }

  updatePolicyType(id: number, data: Partial<PolicyType>): Observable<PolicyType> {
    return this.http.put<PolicyType>(`${this.policyTypesBaseUrl}/${id}`, data);
  }

  deletePolicyType(id: string): Observable<void> {
    return this.http.delete<void>(`${this.policyTypesBaseUrl}/${id}`);
  }
}
