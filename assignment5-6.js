// Car class definition
class Car {
    // initializing constructor of the car properties
    constructor(brand, model, year, color, price, gas) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.color = color;
        this.price = price;
        this.gas = gas;
    }

    // method for simulating the car honking
    honk() {
        console.log("\nTuut tuut");
        console.log(`Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: $${this.price}`);
    }

    // method for simulating race for a specified number of turns
    race(turns) {
        for (let i = 1; i <= turns; i++) {

            // consume gas in each turn
            this.consumeGas();
            console.log(`In turn ${i}: ${this.brand} has ${this.gas} liters of gas remaining..`);
        }
    }

    // method for calculating gas consumption based on car age
    consumeGas() {
        // If the car is new, gas loss is 5; otherwise, it depends on the age of the car
        const gasLoss = this.isNew() ? 5 : (5 + (new Date().getFullYear() - this.year));
        // Subtract gas loss from the current gas
        this.gas -= gasLoss;
    }

    // method for checking if the car is of the current year
    isNew() {
        return this.year === new Date().getFullYear();
    }
}

// creating car instances
const honda = new Car("Honda", "CR-V", 2023, "Red", 50000, 45);
const ford = new Car("Ford", "F-150", 2020, "Black", 25000, 30);
const bmw = new Car("BMW", "X5", 2022, "Green", 60000, 65);
const mazda = new Car("Mazda", "CX-5", 2019, "White", 15000, 60);
const audi = new Car("Audi", "Q7", 2018, "Silver", 52000, 47);
const kia = new Car("Kia", "Forte", 2020, "Blue", 21000, 56);

// invoking the honk method for each car
honda.honk();
ford.honk();
bmw.honk();
mazda.honk();
audi.honk();
kia.honk();

// simulating race for 7 turns for each car
console.log();
honda.race(7);
console.log();
ford.race(7);
console.log();
bmw.race(7);
console.log();
mazda.race(7);
console.log();
audi.race(7);
console.log();
kia.race(7);
console.log();
