function countTotalSalary(employees) {
    let totalSalary = 0;
  
    for (let employee in employees) {
      totalSalary += employees[employee];
    }
  
    return totalSalary;
  }
  
  const salaries = {
    John: 1000,
    Bob: 1500,
    Mary: 2000,
  };
  
  console.log(countTotalSalary(salaries)); // Виведе 4500
  