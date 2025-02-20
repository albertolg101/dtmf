export function getPriceInUSD(priceInCents: number): string {
  const cents = priceInCents % 100;
  return `$${Math.floor(priceInCents / 100)}.${cents === 0 ? "00" : cents} USD`;
}
