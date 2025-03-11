import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {
  countdown: number = 15 * 60; // 15 minutes in seconds
  minutes: number = 15;
  seconds: number = 0;
  interval: any;

  ngOnInit() {
    this.startCountdown();
  }

  startCountdown() {
    this.interval = setInterval(() => {
      if (this.countdown > 0) {
        this.countdown--;
        this.minutes = Math.floor(this.countdown / 60);
        this.seconds = this.countdown % 60;
      } else {
        clearInterval(this.interval); // Stop countdown at 0
        alert("หมดเวลาการชำระเงิน กรุณาทำรายการใหม่!"); // Show timeout alert
      }
    }, 1000); // Run every 1 second
  }
}
