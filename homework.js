const persons = [];
let inputData = prompt(`Enter the person's data separated by ","`,'1,John,Doe,1');
while (inputData) {
    const arr = inputData.split(',');
    if ((arr.length !==4)||arr[3]<0 ||arr[1]===""||arr[2]==="") {
        alert ('Error! Wrong input');} else {
    const person = new Person(arr[0], arr[1].trim(), arr[2].trim(), arr[3]);
    let uniqueIDcheck = +arr[0];
    let res = findPersons(persons,uniqueIDcheck);
    if (res === true) {
            alert ('Error! The person with this ID is already added');}
    else {
            persons.push(person);
    }
    }
    inputData = prompt('Enter person data separate by ","','1,John,Doe,1');
}

printPersons (persons);
printStats (persons);


function findPersons(array, uniqueID) {
    let found = false;
    array.forEach(person => {
        if (person.id === uniqueID) {
            found = true;
        }
    });
    return found;
}

function printPersons (array){
    const PersonsToString = array.map(p => `${p.id} ${p.firstName} ${p.lastName} ${p.age}`);
    console.log("===The list of persons===");
    console.log(PersonsToString.join('\n'));
}

function printStats (array) {
    if (array.length === 0) {
        console.log("Empty array");
        return;}
    let sumAge = array.reduce ((sum,p) => (sum + p.age), 0);
    let avgAge = sumAge/array.length;
    let maxAge = array.reduce ((max,p) => p.age > max ? p.age : max, array[0].age);
    let minAge = array.reduce ((min,p) => p.age < min ? p.age : min, array[0].age);
    console.log(`===Array stats===\nminAge = ${minAge}\nmaxAge = ${maxAge}\nsumAge = ${sumAge}\navgAge = ${avgAge}`);
}

function Person(id,firstName,lastName,age) {
    this.id = +id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = +age;
    }