class Person {    
    // parameterized constructor
    constructor (public FirstName: string,
                 public LastName: string,
                 public Age: number) {
    }
    
    // methods/functions
    public getFullName() : string{
        return `${this.FirstName} ${this.LastName}`;
    }
    
    public getAge(): number {
        return this.Age;
    }
}  