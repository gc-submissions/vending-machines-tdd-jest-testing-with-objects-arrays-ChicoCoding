const formatCurrency = (amount) => {
  if (amount >= 0) {
    return `$${amount.toFixed(2)}`;
  } else {
    return `-$${(amount * -1).toFixed(2)}`;
  }
};
const getCoins = (cents) => {
  let coins = { quarters: 0, dimes: 0, nickels: 0, pennies: 0 };
  while (cents > 0) {
    if (cents >= 25) {
      coins.quarters++;
      cents = cents - 25;
    } else if (cents >= 10) {
      coins.dimes++;
      cents = cents - 10;
    } else if (cents >= 5) {
      coins.nickels++;
      cents = cents - 5;
    } else if (cents > 0) {
      coins.pennies++;
      cents = cents - 1;
    }
  }
  return coins;
};

module.exports = { formatCurrency, getCoins };
