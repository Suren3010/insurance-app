/// <reference lib="webworker" />

addEventListener('message', ({ data }) => {
  console.log('sdsdsdsd');
  const factorial = calculateInstallments(data);
  postMessage(factorial);
});

/**
 *
 * @param data
 * @returns
 */
function calculateInstallments(data: any) {
  const installmentAmount: number = data.amount / data.numberOfInstallments;
  let installments: any[] = [];

  for (let i = 0; i < data.numberOfInstallments; i++) {
    installments.push({
      sequence: i + 1,
      amount: parseFloat(installmentAmount.toFixed(2)),
    });
  }

  return installments;
}
