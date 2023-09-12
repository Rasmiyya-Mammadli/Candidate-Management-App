import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatesService } from '../candidate.service';

@Component({
  selector: 'app-candidate-details',
  templateUrl: './candidate-details.component.html',
  styleUrls: ['./candidate-details.component.css']
})
export class CandidateDetailsComponent implements OnInit {
  candidate: any = {};
  clientStatuses: any[] = [];
  skills: any[] = [];
 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private candidatesService: CandidatesService
  ) {}

  ngOnInit(): void {
    const candidateId = +this.route.snapshot.paramMap.get('id')!;
    
    // Check if candidateId is a valid number (not NaN)
    if (!isNaN(candidateId)) {
      this.getCandidateDetails(candidateId);
      this.getClientStatuses();
      this.getSkills();
    } else {
    }
  }
  
  getCandidateDetails(candidateId: number): void {
    this.candidatesService.getCandidateById(candidateId)
      .subscribe(candidate => {
        this.candidate = candidate;
      });
  }

  getClientStatuses(): void {
    this.candidatesService.getClientStatuses()
      .subscribe(statuses => {
        this.clientStatuses = statuses;
      });
  }

  getSkills(): void {
    this.candidatesService.getSkills()
      .subscribe(skills => {
        this.skills = skills;
      });
  }

  onSubmit(): void {
    this.candidatesService.updateCandidate(this.candidate)
      .subscribe(() => {
        this.router.navigate(['/candidates']); 
      });
  }
}
