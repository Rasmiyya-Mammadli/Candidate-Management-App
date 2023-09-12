import { Component, OnInit } from '@angular/core';
import { CandidatesService } from '../candidate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-candidates',
  templateUrl: './candidates.component.html',
  styleUrls: ['./candidates.component.css']
})
export class CandidatesComponent implements OnInit {
  candidates: any[] = [];

  constructor(
    private candidatesService: CandidatesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCandidates();
  }

  getCandidates(): void {
    this.candidatesService.getCandidates()
      .subscribe(candidates => {
        this.candidates = candidates;
      });
  }

  editCandidate(candidateId: number): void {
    this.router.navigate(['/candidate', candidateId]);
  }
}
