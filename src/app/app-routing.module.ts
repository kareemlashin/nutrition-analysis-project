import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchComponent } from './pages/search/search.component';
import { AnalysisComponent } from './pages/analysis/analysis.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/search',
    pathMatch: 'full',
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'analysis/:count/:name/:quantity',
    component: AnalysisComponent,
  },

  {
    path: '**',
    redirectTo: '/search',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
