//Problem 7


class Car {
    constructor (public make: string ,public model: string, public year: number){};

    getCarAge(){
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;
        return age;
    }
}

const car = new Car('Honda', 'Civic', 2018);
const car2 = new Car('Honda', 'Civic', 1996);
console.log(car.getCarAge())