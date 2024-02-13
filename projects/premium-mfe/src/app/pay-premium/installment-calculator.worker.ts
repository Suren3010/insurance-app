/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  let installments: any[] = [];
  
  for (let i = 0; i < data.numberOfInstallments; i++) {
    installments.push({
      sequence: i+1,
      amount: parseFloat(data.installmentAmount.toFixed(2)),
      status: i < 4 ? 'Paid' : 'Pending',
    });
  }
  postMessage(installments);
});
