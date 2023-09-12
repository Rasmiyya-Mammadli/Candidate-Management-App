import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CandidateDetailsComponent } from './candidate-details/candidate-details.component';
import { CandidatesComponent } from './candidates/candidates.component';

const routes: Routes = [
  { path: '', redirectTo: '/candidates', pathMatch: 'full' },
  { path: 'candidates', component: CandidatesComponent },
  { path: 'candidate/:id', component: CandidateDetailsComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
