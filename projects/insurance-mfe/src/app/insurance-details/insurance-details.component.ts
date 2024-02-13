import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InsuranceDetailsSvc } from 'projects/common-lib/src/lib/insurance-services/insurance-details-svc';

@Component({
  selector: 'app-insurance-details',
  templateUrl: './insurance-details.component.html',
  styleUrls: ['./insurance-details.component.scss'],
})
export class InsuranceDetailsComponent implements OnInit {
  searchText: string = '';
  isInvalid: boolean = false;
  noPolicyFound: boolean = false;
  insuranceList: any[] = [];

  /**
   * Create instance for insurance component details
   * @param insuranceSvc
   */
  constructor(
    private insuranceSvc: InsuranceDetailsSvc,
    private route: ActivatedRoute
  ) {}

  //** Component initialization */
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.searchText = params['id'] === '000' ? '' : params['id'];
      if (this.searchText) {
        this.searchInsurance();
      } else {
        this.insuranceList = [];
      }
    });
  }

  /**
   * Method to search insurance details
   * @returns
   */
  searchInsurance() {
    this.isInvalid = this.searchText.trim() === '';
    if (this.isInvalid) {
      return;
    }
    this.insuranceList = this.insuranceSvc.searchInsurance(this.searchText);
    this.noPolicyFound = this.insuranceList.length <= 0;
  }

  /**
   * Method to load installment details
   * This method load installments details in premium MFE
   */
  loadInstallmentsDetails() {
    let policyData = this.insuranceList[0];
    var customEvent = new CustomEvent('paymentInstallements', {
      detail: policyData,
    });
    window.dispatchEvent(customEvent);
  }
}
