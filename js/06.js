function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;
  
    for (let product of allProducts) {
      if (product.name === productName) {
        totalPrice += product.price * product.quantity;
      }
    }
  
    return totalPrice;
  }
  
  const products = [
    { name: 'Apple', price: 1, quantity: 5 },
    { name: 'Banana', price: 2, quantity: 3 },
    { name: 'Orange', price: 3, quantity: 2 },
  ];
  
  console.log(calculateTotalPrice(products, 'Apple')); // Виведе 5
  console.log(calculateTotalPrice(products, 'Banana')); // Виведе 6
  