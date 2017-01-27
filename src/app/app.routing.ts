import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ParentComponent } from './components/parent/parent.component';
import { GrandmotherComponent } from './components/generations/grandmother.component';
import { MainFormComponent } from './components/forms/main.form.component';
import { MainObservableComponent } from './components/observables/main.observable.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'parent', component: ParentComponent},
  { path: 'generations', component: GrandmotherComponent},
  { path: 'forms', component: MainFormComponent},
  { path: 'observables', component: MainObservableComponent}
];

export const routing = RouterModule.forRoot(routes);
