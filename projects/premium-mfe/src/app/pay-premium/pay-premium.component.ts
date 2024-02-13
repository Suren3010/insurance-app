import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InsuranceDetailsSvc } from 'projects/common-lib/src/lib/insurance-services/insurance-details-svc';

@Component({
  selector: 'app-pay-premium',
  templateUrl: './pay-premium.component.html',
  styleUrls: ['./pay-premium.component.scss'],
})
export class PayPremiumComponent implements OnInit {
  policyNumber: string = '';
  numberOfInstallments: number = 12;
  insuranceList: any[] = [];
  installments: any[] = [];

  //**Create instance for component */
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private insuranceSvc: InsuranceDetailsSvc
  ) {}

  //** Component initialization */
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.policyNumber = params['id']; // accessing route parameter 'id'
      this.loadData();
      this.calculateInstallments();
    });
  }

  /**
   * Load policy details
   */
  loadData() {
    this.insuranceList = this.insuranceSvc.searchInsurance(this.policyNumber);
  }

  /**
   * Method to calculate installments
   */
  calculateInstallments() {
    const installmentAmount: number =
      this.insuranceList[0].amount / this.numberOfInstallments;

    /*** Worker to calculate installments */
    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker(
        new URL('./installment-calculator.worker', import.meta.url)
      );
      worker.onmessage = ({ data }) => {
        this.installments = data;
      };
      worker.postMessage({
        numberOfInstallments: this.numberOfInstallments,
        installmentAmount: installmentAmount,
      });
    } else {
      // Web workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }

    // for (let i = 0; i < this.numberOfInstallments; i++) {
    //   this.installments.push({
    //     sequence: i + 1,
    //     amount: parseFloat(installmentAmount.toFixed(2)),
    //     status: i < 4 ? 'Paid' : 'Pending',
    //   });
    // }
  }

  /***
   *
   */
  backToSearch() {
    this.router.navigate(['/insurance', this.insuranceList[0].policyNumber]);
  }
}
