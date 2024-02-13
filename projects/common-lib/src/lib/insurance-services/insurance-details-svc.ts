import { Injectable } from '@angular/core';
//import insuranceData from './data.json';

@Injectable()
export class InsuranceDetailsSvc {
  searchText: string = '';
  insuranceList: any[] = [
    {
      "policyNumber": "12345",
      "phone": "21365489",
      "amount": "5000000",
      "holderName": "John Doe",
      "startDate": "2024-01-01",
      "endDate": "2024-12-31",
      "photoUrl": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "address": {
        "street": "123 Main St",
        "city": "Cityville",
        "state": "Stateville",
        "zip": "12345"
      }
    },
    {
      "policyNumber": "54321",
      "phone": "98765432",
      "amount": "6000000",
      "holderName": "Jane Smith",
      "startDate": "2025-01-01",
      "endDate": "2025-12-31",
      "photoUrl": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "address": {
        "street": "456 Elm St",
        "city": "Townville",
        "state": "Countyville",
        "zip": "54321"
      }
    },
    {
      "policyNumber": "67890",
      "phone": "45678901",
      "amount": "7000000",
      "holderName": "Alice Johnson",
      "startDate": "2023-06-15",
      "endDate": "2024-06-14",
      "photoUrl": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "address": {
        "street": "789 Oak St",
        "city": "Villageville",
        "state": "Countyville",
        "zip": "67890"
      }
    },
    {
      "policyNumber": "24680",
      "phone": "78901234",
      "amount": "8000000",
      "holderName": "Bob Williams",
      "startDate": "2024-03-20",
      "endDate": "2025-03-19",
      "photoUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "address": {
        "street": "135 Pine St",
        "city": "Hamletville",
        "state": "Countyville",
        "zip": "24680"
      }
    },
    {
      "policyNumber": "13579",
      "phone": "12345678",
      "amount": "6000000",
      "holderName": "Emma Brown",
      "startDate": "2024-08-10",
      "endDate": "2025-08-09",
      "photoUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "address": {
        "street": "246 Cedar St",
        "city": "Villageville",
        "state": "Countyville",
        "zip": "13579"
      }
    },
    {
      "policyNumber": "97531",
      "phone": "34567890",
      "amount": "5000000",
      "holderName": "Michael Lee",
      "startDate": "2024-12-01",
      "endDate": "2025-11-30",
      "photoUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "address": {
        "street": "357 Maple St",
        "city": "Townville",
        "state": "Countyville",
        "zip": "97531"
      }
    },
    {
      "policyNumber": "86420",
      "phone": "23456789",
      "amount": "3000000",
      "holderName": "Sophia Garcia",
      "startDate": "2024-04-25",
      "endDate": "2025-04-24",
      "photoUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "address": {
        "street": "468 Walnut St",
        "city": "Hamletville",
        "state": "Countyville",
        "zip": "86420"
      }
    },
    {
      "policyNumber": "31415",
      "phone": "67890123",
      "amount": "4000000",
      "holderName": "William Rodriguez",
      "startDate": "2024-11-05",
      "endDate": "2025-11-04",
      "photoUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "address": {
        "street": "579 Oak St",
        "city": "Cityville",
        "state": "Stateville",
        "zip": "31415"
      }
    },
    {
      "policyNumber": "27182",
      "phone": "78901234",
      "amount": "6000000",
      "holderName": "Olivia Martinez",
      "startDate": "2023-10-15",
      "endDate": "2024-10-14",
      "photoUrl": "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=600",
      "address": {
        "street": "792 Elm St",
        "city": "Townville",
        "state": "Countyville",
        "zip": "27182"
      }
    },
    {
      "policyNumber": "32383",
      "phone": "90123456",
      "amount": "8000000",
      "holderName": "Ethan Wilson",
      "startDate": "2024-07-20",
      "endDate": "2025-07-19",
      "photoUrl": "https://images.pexels.com/photos/47547/squirrel-animal-cute-rodents-47547.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      "address": {
        "street": "893 Maple St",
        "city": "Hamletville",
        "state": "Countyville",
        "zip": "32383"
      }
    }
  ]
  ; // Assuming insuranceData is an array of insurance objects

  searchInsurance(searchText: string) {
    if (searchText.trim() === '') {
      return this.insuranceList;
    } else {
      return this.insuranceList.filter((insurance: any) =>
        insurance.policyNumber.includes(searchText) 
        || insurance.phone.includes(searchText) 
      );
    }
  }
}
