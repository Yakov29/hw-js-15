function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';
  
    for (let employee in employees) {
      if (employees[employee] > maxTasks) {
        maxTasks = employees[employee];
        bestEmployee = employee;
      }
    }
  
    return bestEmployee;
  }
  
  const employees = {
    John: 4,
    Bob: 6,
    Mary: 8,
  };
  
  console.log(findBestEmployee(employees)); // Виведе 'Mary'
  