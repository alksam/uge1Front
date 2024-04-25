console.log("hey");
//document.getElementById("app");

const names = ["Lars", "Jan", "Peter", "Bo", "Frederik"];

const filteredNames = names.filter(name => name.length <= 3);

console.log("Original array:");
names.forEach(name => console.log(name));

console.log("Filtered array with names of length <= 3:");
filteredNames.forEach(name => console.log(name));



const uppercasedNames = names.map(name => name.toUpperCase());

console.log("Array with all names uppercased:");
uppercasedNames.forEach(name => console.log(name));


function generateNameList(names) {
    const listItems = names.map(name => `<li>${name}</li>`);
    const html = `<ul>${listItems.join("")}</ul>`;
    return html;
  }
  
  // Example usage:
  const namesArray = ["Lars", "Peter", "Jan", "Ian"];
  const htmlString = generateNameList(namesArray);
  console.log(htmlString);
// car

console.log("---------------------------------------------------------")

  let cars = [
    { id: 1, year: 1997, make: 'Ford', model: 'E350', price: 3000 },
    { id: 2, year: 1999, make: 'Chevy', model: 'Venture', price: 4900 },
    { id: 3, year: 2000, make: 'Chevy', model: 'Venture', price: 5000 },
    { id: 4, year: 1996, make: 'Jeep', model: 'Grand Cherokee', price: 4799 },
    { id: 5, year: 2005, make: 'Volvo', model: 'V70', price: 44799 }
  ];

  
// Cars newer than 1999
const newerThan1999 = cars.filter(car => car.year > 1999);
console.log("Cars newer than 1999:");
console.log(newerThan1999);

// All Volvo's
const allVolvos = cars.filter(car => car.make === 'Volvo');
console.log("All Volvo's:");
console.log(allVolvos);

// All cars with a price below 5000
const below5000 = cars.filter(car => car.price < 5000);
console.log("Cars with a price below 5000:");
console.log(below5000);

console.log("---------------------------------------------------------")

function generateSQLInserts(data) {
    return data.map(car => {
      return `INSERT INTO cars (id, year, make, model, price) VALUES (${car.id}, ${car.year}, '${car.make}', '${car.model}', ${car.price});`;
    }).join("\n");
  }
  
  const sqlInserts = generateSQLInserts(cars);
  console.log(sqlInserts);