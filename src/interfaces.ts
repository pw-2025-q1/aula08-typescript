interface Student {
    firstname: string,
    lastname: string,
    id: String,
    age: number
}

const s1 : Student = {
    firstname: 'maria',
    lastname: 'pereira',
    id: '5678',
    age: 26
}

console.log(s1)

/**
 * Interfaces can be implemented by classes
 */
interface ICar {
    plate: string
    year: number
    maker: string
    model: string
    price: number
    color: string
    isExempt(): boolean
}

/**
 * An object that follows an interface that match exactly
 * the contents of an interface.
 */
const car: ICar = {
    plate: 'hyh-7828',
    year: 2020,
    maker: 'volkswagen',
    model: 'polo',
    price: 70000,
    color: 'black',
    isExempt: function () {
        return new Date().getFullYear() - this.year > 20
    },
    // whatever: ''
}

console.log(car);

/**
 * A class that implements an interface must include the contents of the
 * interface but can define additional components.
 */
class Car implements ICar {
    readonly plate: string
    readonly year: number
    readonly maker: string
    readonly model: string
    readonly price: number
    readonly color: string
    readonly state: string

    constructor(plate: string, year: number, maker: string, model: string, price: number, color: string, state: string) {
        this.plate = plate
        this.year = year
        this.maker = maker
        this.model = model
        this.price = price
        this.color = color
        this.state = state;
    }

    isExempt(): boolean {
        return new Date().getFullYear() - this.year > 20
    }

    toString(): string {
        return `${this.maker} ${this.model}, plate: ${this.plate}`
    }
}

const newCar = new Car(
    'hyh-7828',
    2020,
    'volkswagen',
    'polo',
    70000,
    'black',
    'sp'
);

console.log(newCar + "")

export = {}