// 1. Create prompt message that says `Welcome to the Froyo Shop. Please enter the flavors you would like, separated by a comma. Ex: vanilla, strawberry, chocolate.

let flavors = prompt(
    `Welcome to the Froyo Shop. Please enter the flavors you would like, separated by a comma. Ex: vanilla, strawberry, chocolate.`
);
console.log(flavors)
// 2. Store the entered flavors into an array called userFlavors.

let flavorsArray = flavors.split(`,`);
console.log(flavorsArray);

// 3. Create object called numOfFlavors that can be updated with the number of each flavor entered.

const numOfFlavors = {};

// 4. Make function that tracks how many of each flavor have been requested and updates the object that stores those values.

for (let i = 0; i < flavorsArray.length; i++) {
    if (numOfFlavors[flavorsArray[i]]) {
        numOfFlavors[flavorsArray[i]]++;
    } else {
        numOfFlavors[flavorsArray[i]] = 1;
    }
}

// 5. Console log the object so the amount of each flavor is revealed.

console.table(numOfFlavors);

