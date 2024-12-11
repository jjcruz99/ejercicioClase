export function costCalculator(transaccion) {
  let costotal = transaccion + ((transaccion * 0.01) + 3)
  return costotal
}
console.log(costCalculator(124))