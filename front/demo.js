console.log("hey");
let fulname = "mohamed ";
fulname = 12;
//const mother = { name: " mm",  age: 40};
//const obj = {name:"ahmad", alder : 17 , isStudent: true , mother: motehr};
//console.log(obj);

// arr
const arr = [1,2,"johan",true,{name:"sss"}];
console.log(arr);
console.log(arr[0]);
arr.push("java");
console.log(arr);
const popped = arr.pop();
console.log("popped",popped);
console.log(arr);
//arr = [1,2,3];
const subArr = arr.slice(0,2);
console.log(subArr);
console.log(arr);
const myValue = null;
console.log(myValue);
let myvar;
console.log(myvar);

// functhion 

myFunc(popped);

function myFunc(name) {
    console.log("hello from  my func",name)
}

// samling 

const car1  = 10 ;
const car2 = "10 ";
console.log(car1== car2);
console.log(car1=== car2);

// 
const myString = ("hello its me ");
console.log(myString.length);
console.log(myString.substring(0,8));
console.log(myString.search("hello"));
console.log(myString.replace("hello","hi"));
console.log(myString.indexOf("hello"));



const arri = ["joha", "jana","jaskkw","sami"];
for (let i = 0; i< arri.length; i++){
    console.log(arri[i]);
}

arri.forEach (function (name){
    console.log(name);
});

arri.forEach (( name , index) => {
    console.log(name,index);
});

const newarr = arri.map((name => {
    return name + "doe";

}));

console.log(newarr);

//en anden for løb 

const obj = {name:"ahmad", alder : 17 , isStudent: true , mother:{name: "ss"}};

for(let key in obj){
    console.log(key,obj[key]);
}


// destr