import {Routes} from '@angular/router';
import {HeroesComponent} from '../heroes/heroes.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

export const appRoutes: Routes = [
  {path: 'hero', component: HeroesComponent},
  {path: 'dashboard', component: DashboardComponent}
];
