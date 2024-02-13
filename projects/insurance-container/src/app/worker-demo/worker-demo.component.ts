import { Component } from '@angular/core';

@Component({
  selector: 'worker-demo',
  templateUrl: './worker-demo.component.html',
  styleUrls: ['./worker-demo.component.scss'],
})
export class WorkerDemoComponent {
  amount: string = '';
  timePeriod: string = '';
  isInvalidAmount: boolean = false;
  isInvalidTimePeriod: boolean = false;
  private worker: Worker;
  installments: any[] = [];

  /**
   * Create instance for component
   */
  constructor() {
    this.worker = new Worker('./../installment-calc.worker', {
      type: 'module',
    });
  }

  /**
   * Calculate installments
   */
  calculateInstallments() {
    this.isInvalidAmount = this.amount.trim() === '';
    if (this.isInvalidAmount) {
      return;
    }

    this.isInvalidTimePeriod = this.timePeriod.trim() === '';
    if (this.isInvalidTimePeriod) {
      return;
    }
    this.worker.postMessage('');
    /*** Calculate installments */
    this.calculateInstallmentsWrapper()
      .then((installments) => {
        console.log(this.installments);
        this.installments = installments;
      })
      .catch((error) => {
        console.error('Error calculating factorial:', error);
      });
  }

  /**
   * Wrapper method for worker
   * @returns 
   */
  calculateInstallmentsWrapper(): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.worker.onmessage = ({ data }) => {

        resolve(data);
      };

      this.worker.onerror = (error) => {
        reject(error);
      };
      this.worker.postMessage({amount: this.amount, timePeriod: this.timePeriod });
    });
  }
}
