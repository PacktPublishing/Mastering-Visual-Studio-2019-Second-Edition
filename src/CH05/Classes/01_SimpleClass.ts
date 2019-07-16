class Person {
    // properties 
    FirstName: string = "Default";
    LastName: string = "User";
    Age: number;
    
    // default constructor
    constructor() {
        this.FirstName = "Kunal";
        this.LastName = "Chowdhury";
        this.Age = 30;
    }
    
    // methods/functions
    public getFullName() : string {
        return `${this.FirstName} ${this.LastName}`;
    }
    
    public getAge(): number {
        return this.Age;
    }
}
