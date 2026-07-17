//1.even odd
const checkEvenOdd = (num) => {
    return (num % 2 === 0) ? "Even" : "Odd";
};


console.log(checkEvenOdd(88)); 
console.log(checkEvenOdd(73)); 


//2.salary
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }

    showSalary() {
        console.log(`${this.name} earns ${this.salary}`);
    }
}

const emp = new Employee("Riya", 50000);

emp.showSalary();

//3. rectangle

class Rectangle {
    constructor(length, width) {
        this.length = length;
        this.width = width;
    }

    findArea() {
        return this.length * this.width;
    }
}

// Create an object
const rect = new Rectangle(10, 5);

// Display the area
console.log("Area of Rectangle:", rect.findArea());


//4. bank account
class BankAccount {
    constructor(accountHolder, balance) {
        this.accountHolder = accountHolder;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log("Balance after deposit: " + this.balance);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log("Balance after withdrawal: " + this.balance);
        } else {
            console.log("Insufficient balance");
        }
    }
}

// Create an object
const account = new BankAccount("Riya", 10000);

// Deposit and Withdraw
account.deposit(2000);
account.withdraw(3000);

//5.two variables
let a = 10;
let b = 20;

[a, b] = [b, a];

console.log("a =", a);
console.log("b =", b);

//6.student passed
function checkResult(marks) {
    return new Promise((resolve, reject) => {
        if (marks >= 35) {
            resolve("Student Passed");
        } else {
            reject("Student Failed");
        }
    });
}

// Example
checkResult(40)
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

//7."Payment Successful"
console.log("Processing Payment...");

const payment = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Payment Successful");
    }, 4000);
});

payment.then((message) => {
    console.log(message);
});

//8. student's information
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

// Create three student objects
const s1 = new Student("Riya", 20);
const s2 = new Student("Rahul", 21);
const s3 = new Student("Priya", 19);

// Store objects in an array
const students = [s1, s2, s3];

// Print student information using an arrow function
students.forEach(student => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
});

//9.Student Management System

// Student Class
class Student {
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
}

// Add 5 student objects
const students = [
    new Student("Riya", 20, "BCA"),
    new Student("Rahul", 21, "BBA"),
    new Student("Priya", 19, "B.Sc"),
    new Student("Amit", 22, "B.Com"),
    new Student("Neha", 20, "BCA")
];

// Destructuring to access first student details
const [{ name, age, course }] = students;
console.log("First Student:");
console.log(name, age, course);

// Arrow function to print all student names
const printNames = (students) => {
    students.forEach(student => console.log(student.name));
};

console.log("\nStudent Names:");
printNames(students);

// Promise to simulate loading student data after 3 seconds
function loadStudents() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(students);
        }, 3000);
    });
}

// Async/Await to display loaded data
async function displayStudents() {
    console.log("\nLoading student data...");
    const data = await loadStudents();

    console.log("Student Data Loaded:");
    data.forEach(student => {
        console.log(`Name: ${student.name}, Age: ${student.age}, Course: ${student.course}`);
    });
}

// Call the function
displayStudents();

//10.Library Management System

// Book Class
class Book {
    constructor(title, author, price) {
        this.title = title;
        this.author = author;
        this.price = price;
    }
}

// Create 5 book objects
const books = [
    new Book("JavaScript", "John", 500),
    new Book("Python", "David", 600),
    new Book("Java", "James", 700),
    new Book("C++", "Bjarne", 550),
    new Book("HTML & CSS", "Mark", 450)
];

// Destructuring to access first book details
const [{ title, author, price }] = books;
console.log("First Book:");
console.log(title, author, price);

// Arrow function to calculate total price
const totalPrice = (books) =>
    books.reduce((total, book) => total + book.price, 0);

console.log("Total Price:", totalPrice(books));

// Promise to simulate fetching books after 3 seconds
function fetchBooks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(books);
        }, 3000);
    });
}

// Async/Await to display books
async function displayBooks() {
    console.log("Loading books...");

    const data = await fetchBooks();

    console.log("Books Loaded:");
    data.forEach(book => {
        console.log(
            `Title: ${book.title}, Author: ${book.author}, Price: ${book.price}`
        );
    });
}

// Call the function
displayBooks();