let names = ["Lars", "Peter", "Jan", "Bo"];


function myFilter(array, callback) {
    let filteredArray = [];
    for (let i = 0; i < array.length; i++) {
      if (callback(array[i])) {
        filteredArray.push(array[i]);
      }
    }
    return filteredArray;
  }
  
  // Example usage:
  const filteredNames = myFilter(names, name => name.length <= 3);
  console.log(filteredNames);

  function myMap(array, callback) {
    let mappedArray = [];
    for (let i = 0; i < array.length; i++) {
      mappedArray.push(callback(array[i]));
    }
    return mappedArray;
  }
  const uppercasedNames = myMap(names, name => name.toUpperCase());
console.log(uppercasedNames);