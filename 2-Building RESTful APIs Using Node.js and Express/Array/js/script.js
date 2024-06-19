let carMakes = ["BMW", "Mini","Ford"];

let anotherCarMakes = new Array('Opel', 'Mercedes','Lotus');

console.log(carMakes);

carMakes.push("Nissan");
console.log("Afer pushing Nissan: ", carMakes);

console.log(anotherCarMakes);

carMakes.unshift("Ferrari");
console.log("Afer unshift Ferrari: ", carMakes);

carMakes.pop();
console.log("Afer pop: ", carMakes);

let cars = [];
let make = 'Eagle';
let model = 'Talon';
let color = 'Blue';

let car = [];
car.push(make);
car.push(model);
car.push(color);

cars.push(car);

console.log(car);
console.log(cars);

const products = [
    ['Gucci Round Bucklet Belt', 300],
    ['Gucci Bucklet Belt', 200],
    ['Gucci shoes', 500],
    ['Gucci T-Shirt', 700]
];

/*
const calculateDiscountPrice = discount => {
    for(let i = 0; i < products.length; i++){
        products[i][1] = products[i][1] - products[i][1] * discount/100;
    }
}

calculateDiscountPrice(10);
*/

const calculateDiscountedPrice = discount => products.map(
    product => [product[0], product[1]-product[1]*discount/100]
)

let discountedPrices = calculateDiscountedPrice(10);


console.log(products);
console.log(discountedPrices);