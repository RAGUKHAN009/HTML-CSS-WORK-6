// task-1

// let age = parseInt(prompt("PLEASE ENTER YOUR AGE"));
// let age = 19;
if (age >= 18) {
    console.log("you can vote");
} else {
    console.log("sorry you are underage");
}

// TASK 2

// let agge = parseInt(prompt("PLEASE ENTER YOUR AGE"));
let agge = 18;
let result = agge >= 18 ? "You can drive a car!" : "Sorry, you cannot drive yet.";
console.log(result);


// TASK 3

let fruitBasket = ["Orange", "Mango", "Apple"]
// BEFORE PUSH
console.log(fruitBasket);

// AFTER PUSH
fruitBasket.push("Banana")
console.log(fruitBasket);

// // AFTER SPLICE 
fruitBasket.splice(2, 1, 'Grapes')
// removes one element starting from index 2 
console.log(fruitBasket);

// TASK 4

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let evenNums = nums.filter(function (nums) {
    return nums % 2 === 0;
});

// 0=> REPRESENTS EVEN
// 1=> REPRESENTS ODD

console.log(evenNums);


// TASK 5


const expenses =
    [
        { description: "Groceries", amount: 50, category: "Food" },
        { description: "Dinner", amount: 30, category: "Food" },
        { description: "Movie", amount: 15, category: "Entertainment" },
        { description: "Gas", amount: 40, category: "Transportation" },
        { description: "Books", amount: 25, category: "Education" },
    ];


// PART 1

// USING for-loop

for (let i = 0; i < expenses.length; i++) {
    console.log(`Expense: ${expenses[i].description}, Amount: ${expenses[i].amount}`);
}

// PART 2

// Using forEach method
expenses.forEach((expense) => {
    console.log(`Expense: ${expense.description}, Amount: ${expense.amount}`);
});

// PART 3

// Using for-of loop
for (const expense of expenses) {
    console.log(`Expense: ${expense.description}`);
}

// PART 4

// Using map method
const amOnly = expenses.map((expense) => expense.amount);
console.log(amOnly);

// PART 5

// Using filter method
const highAmounts = expenses.filter((expense) => expense.amount >= 30);
console.log(highAmounts);

// PART 6

// Using reduce method
const tA = expenses.reduce((accumulator, expense) => accumulator + expense.amount, 0);
console.log(`Total Amount: ${tA}`);
console.log(tA);

// PART 7


const finalResult = expenses
// map cretes a new array
    .map((expense) => expense.amount * 2)
// filter cretes a new array of new elemenets on which function is applied
    .filter((amount) => amount >= 60)

    .reduce((accumulator, amount) => accumulator + amount, 0);

console.log(`Final Result: ${finalResult}`);