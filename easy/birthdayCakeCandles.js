const candles = [3, 2, 1, 3];

function birthdayCakeCandles(candles) {
  const tallest = Math.max(...candles);
  let quant = 0;
  candles.forEach((candle) => {
    if(candle === tallest) quant++;
  })
  return quant;
}
console.log(birthdayCakeCandles(candles));