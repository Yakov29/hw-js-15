function getAllPropValues(arr, prop) {
    const values = [];
  
    for (let obj of arr) {
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
      }
    }
  
    return values;
  }
  
  const products = [
    { name: 'Apple', price: 1 },
    { name: 'Banana', price: 2 },
    { name: 'Orange', price: 3 },
  ];
  
  console.log(getAllPropValues(products, 'name')); 
  console.log(getAllPropValues(products, 'price')); 
  