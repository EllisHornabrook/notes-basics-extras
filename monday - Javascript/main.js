const companies = [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];


// --- STANDARD FOR LOOP ---
// PRINT EACH COMPANY TO THE CONSOLE
for (let i = 0; i < companies.length; i++) {
    const company = companies[i];
    console.log(company);
};


// --- FOR EACH ---
// PRINT EVERY COMPANY TO THE CONSOLE
companies.forEach((company) => {
console.log(company.name);
});


// --- FILTER ---
// USING A FOR LOOP, FILTER OUT ONLY THE COMPANIES THAT HAVE LASTED OVER 15 YEARS
for (let i = 0; i < companies.length; i++) {
    const company = companies[i];

    if (company.end - company.start >= 15) {
        console.log(company.name);
    };
};

// USING A FOR LOOP, FILTER OUT ONLY THE AGES THAT ARE > 18
let canDrink = [];
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 18) {
        canDrink.push(ages[i]);
        console.log(canDrink);
    };
};

// USING THE ARRAY METHOD FILTER OUT ONLY THE AGES THAT ARE > 18
let canDrink = ages.filter(age => age >= 18);
console.log(canDrink);

// CREATE AN ARRAY CONTAINING ONLY THE COMPANIES WITH THE CATAGORY OF RETAIL
let retail = companies.filter(company => company.category == "Retail");
console.log(retail);

// CREATE AN ARRAY CONTAINING ONLY THE COMPANIES THAT STARTED IN THE EIGHTIES
let eighties = companies.filter(company => company.start >= 1980 && company.start < 1990);
console.log(eighties);


// --- MAP ---
// CREATE A NEW ARRAY CONTAINING THE COMPANY NAME & THE YEARS OF OPERATION
let newCompany = companies.map(company => company.name + " has been running for " + (company.end - company.start) + " years.");
console.log(newCompany);

// GET SQUARE ROOT OF EACH AGE
let squareRoot = ages.map(age => Math.sqrt(age));
console.log(squareRoot);


// --- SORT ---
// SORT AGES IN ASCENDING ORDER
let ascending = ages.sort((a, b) => a - b);
console.log(ascending);

// SORT AGES IN DESCENDING ORDER
let descending = ascending.reverse();
console.log(descending);
// OR
let descending = ages.sort((a, b) => b - a);
console.log(descending); 

// SORT THE COMPANIES ARRAY FROM EARLIEST FOUNDED TO LATEST
let startDates = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
console.log(startDates);


// --- REDUCE ---
// SUM ALL OF THE AGES USING REDUCE
let allAges = ages.reduce((age, val) => age + val, 0);
console.log(allAges);

// GET THE TOTAL YEARS OF THE COMPANIES USING REDUCE
let companyYears = companies.map(company => company.end - company.start).reduce((age, val) => age + val, 0);
console.log(companyYears);
// OR SHORTER
let companyYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(companyYears);


// --- FIND ---
// FIND FIRST COMPANY WITH CATAGORY OF TECH IN THE ARRAY
const findItem = companies.find(company => {
    return company.category == "Technology"
});
console.log(findItem);


// --- SOME ---
// IF SOMETHING HAS WHAT YOU ARE LOOKING FOR, TRUE OR FALSE RETURNED. 2020 IS FALSE, 2000 WOULD BE TRUE
const findSome = companies.some(company => {
    return company.end >= 2020
});
console.log(findSome);


// --- EVERY ---
// IF EVERY THING HAS WHAT YOU ARE LOOKING FOR, TRUE OR FALSE RETURNED. EVERY COMPANY HAS 1970 OR GREATER START, BUT NOT 1990
const findEvery = companies.every(company => company.start >= 1970);
console.log(findEvery);


// --- INCLUDES ---
// DOES THE AGES ARRAY INCLUDE THE NUMBER 44, RETURNS TRUE OR FALSE
const includesNumber = ages.includes(44);
console.log(includesNumber);


// --- INDEXOF ---
// SHOWS THE INDEX POSITION OF THE OBJECT IN THE ARRAY, 12 IS SECOND IN THE ARRAY SO RETURNS 1. IF -1 RETURNED THING IS NOT IN ARRAY
const ageIndex = ages.indexOf(44);
console.log(ageIndex);
const wrongIndex = ages.indexOf(234);
console.log(wrongIndex);


// --- SHALLOW COPY VS DEEP COPY ---
let personOne = 'ellis';
let personTwo = personOne;
personOne = 'sam';
console.log(personOne, personTwo);
// ONLY CHANGES ONE AS THE SECOND LET IS CREATING A NEW PRIMATIVE DATA TYPE

const shallowArray = [123, 'ellis', true, null, undefined]

// MAKES A COPY OF THE ARRAY
let shallowCopy = shallowArray;
// BECAUSE AN ARRAY IS NOT A PRIMATIVE DATA TYPE, SHALLOWCOPY IS NOW A REFERENCE TO SHALLOWARRAY (CHANGES BOTH AS 'COPY' IS WATCHING 'ARRAY')
shallowArray[0] = 456;
console.log(shallowCopy, shallowArray);


// --- SHALLOW COPY ARRAY METHODS ---
// SLICE - PUTTING 0 COPIES THE WHOLE ARRAY - USE TWO NUMBERS TO GET EVERYTHING IN FIRST TO SECOND
const newArray = shallowArray.slice(0)

// CONCAT
// ARRAY ONE IS AN EMPTY ARRAY
arrayOne.concat(arrayTwo);

// SPREAD
let arr1 = [...shallowArray]
arr1[1] = 'sam'
console.log(...arr1, shallowArray);

// FROM
let arr = Array.from(shallowArray);
shallowArray[0] = 789;
console.log(arr, shallowArray);


// COMPLEX DATA TYPES INSIDE COMPLEX DATA TYPES
let deepObject = {
    'coaches': ['sam', 'bex', 'andy', 'ollie'],
    'trainees': ['ellis', 'ben', 'steve', 'danny', 'frank'],
    'week': 11,
    'learning': true
};

let newObject = {...deepObject};

// REPLACES THE ORIGINAL TRAINEE NAME BY TARGETING THE SECOND INDEX INSIDE ARRAY
newObject.trainees[2] = 'grant';
console.log(newObject, deepObject);

// MAKES A NEW ARRAY WITH THE NEW TRAINEE, DOES NOT AFFECT ORIGINAL ARRAY AS NOT TARGETING IT BEFORE =
newObject.trainees = ['ellis', 'ben', 'grant', 'danny', 'frank'];
console.log(newObject, deepObject);


// JSON PARSE (CONVERTS A STRING TO AN OBJECT) & JSON STRINGIFY (CONVERTS THE OBJECT IN TO A STRING)
let anotherObject = JSON.parse(JSON.stringify(deepObject));
anotherObject.coaches[0] = 'matt';
console.log(anotherObject, deepObject);


// --- CLASSES & SUBCLASSES ---
class Car {
    constructor(brand, model, colour, year) {
        this.brand = brand;
        this.model = model;
        this.colour = colour;
        this.year = year;
    };

    getSummary() {
        return `This is a ${this.colour} ${this.brand} ${this.model} that was that was built in ${this.year}.`
    };

    static numOfWheels() {
        return 4;
    };
};

// ALWAYS SET THE VALUES IN THE ORDER OF THE CONSTRUCTOR
const myWhip = new Car('Mazda', 2, 'Navy Blue', 2015);
console.log(myWhip);
console.log(myWhip.getSummary());
console.log(Car.numOfWheels);

const myWhip2 = new Car('Ford', 'GT', 'Red', 2020);
console.log(myWhip2);
console.log(myWhip2.getSummary());

// ADDING A SUBCLASS WITH AN EXRA VALUE
class Book {
    constructor(title, author, genre, year) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.year = year;
    };

    getSummary() {
        return `${this.title} is written by ${this.author}, the genre is ${this.genre} and it was published in ${this.year}.`
    };
};
console.log(Book);

class Magazine extends Book {
    constructor(title, author, genre, year, price) {
        super(title, author, genre, year);
        this.price = price;
    }
}

const mag = new Magazine('Marvel Legends', 'Stan Lee', 'Science Fiction', 2020, '£14.99')
console.log(mag);
