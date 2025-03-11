import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LocationComponent } from './pages/location/location.component';
import { PaymentComponent } from './pages/payment/payment.component';
import { CustomizeComponent } from './pages/customize/customize.component';
import { OrderComponent } from './pages/order/order.component';

export const routes: Routes = [
    { path: '', component: MainComponent }, 
    { path: 'location', component: LocationComponent },
    { path: 'payment', component: PaymentComponent },
    { path: 'customize', component: CustomizeComponent },
    { path: 'order', component: OrderComponent },
    { path: '**', component: MainComponent },
  ];
