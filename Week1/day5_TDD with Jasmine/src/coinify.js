/* There are four types of common coins in US currency:
  quarters (25 cents)
  dimes (10 cents)
  nickels (5 cents)
  pennies (1 cent)

There are 6 ways to make change for 15 cents:
  A dime and a nickel;
  A dime and 5 pennies;
  3 nickels;
  2 nickels and 5 pennies;
  A nickel and 10 pennies;
  15 pennies.

How many ways are there to make change for a dollar
using these common coins? (1 dollar = 100 cents). */

function combos (money) {
  var possibilities = []
  var coins = [25, 10, 5, 1]
  var count = 0
  for (var a = 0; a <= money / coins[0]; a++) {
    for (var b = 0; b <= money / coins[1]; b++) {
      for (var c = 0; c <= money / coins[2]; c++) {
        for (var d = 0; d <= money / coins[3]; d++) {
          var worstChange = (a * coins[0]) + (b * coins[1]) + (c * coins[2]) + (d*coins[3]);
          if (worstChange === money) {
            possibilities = [a, b, c, d].filter(function (elem) {
              return elem > 0
            })
            count++
          }
        }
      }
    }
  }
  return [count, possibilities]
}
combos(100)