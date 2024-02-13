import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'insurance-container';

  /**
   * create instance for component
   */
  constructor(private router: Router) {
    this.InitializeCustomEvents()
  }

  /**
   * Initialize custom events
   */
  InitializeCustomEvents() {
    /****Payment installments details events */
    window.addEventListener('paymentInstallements', (eventData: any) => {
      this.router.navigate(['/payments', eventData.detail.policyNumber]);
    });
  }
}
