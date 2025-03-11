import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LocationComponent } from './pages/location/location.component';
import { PaymentComponent } from './pages/payment/payment.component';

export const routes: Routes = [
    { path: 'Home', component: MainComponent }, 
    { path: 'Location', component: LocationComponent },
    { path: 'Payment', component: PaymentComponent }
  ];
