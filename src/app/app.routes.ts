import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LocationComponent } from './pages/location/location.component';

export const routes: Routes = [
    { path: 'Home', component: MainComponent }, 
    { path: 'location', component: LocationComponent }
  ];
