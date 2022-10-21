const calculateChange = (total, payment) => {
  return payment - total;
};

const isSufficientPayment = (total, payment) => {
  if (payment >= total) {
    return true;
  } else {
    return false;
  }
};

const calculateTotal = (itemsArray) => {
  let sum = 0;
  itemsArray.forEach((item) => {
    sum += item.price;
  });
  return sum;
};

const addItem = (itemsArray, newName, newPrice) => {
  itemsArray.push({ name: newName, price: newPrice });
  return itemsArray;
};

const removeItem = (itemsArray, index) => {
  itemsArray.splice(index, 1);
  return itemsArray;
};

module.exports = {
  calculateChange,
  isSufficientPayment,
  calculateTotal,
  addItem,
  removeItem,
};
