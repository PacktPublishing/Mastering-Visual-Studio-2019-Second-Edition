class Base {
    PropertyOne: string;
    PropertyTwo: string;

    constructor(p1: string, p2: string) {
        this.PropertyOne = p1;
        this.PropertyTwo = p2;
    }
}

class Derived extends Base {
    PropertyThree: string;

    constructor(p1: string, p2: string, p3: string) {
        super (p1, p2);

        this.PropertyThree = p3;
    }

    public print() {
        console.log(`P1: ${this.PropertyOne}
                     P2: ${this.PropertyTwo}
                     P3: ${this.PropertyThree}`);
    }
}