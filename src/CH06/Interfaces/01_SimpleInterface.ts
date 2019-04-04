interface IPerson {
    FirstName: string;
    LastName: string;

    getDetails(): string;
}

class Employee implements IPerson {
    EMP_ID: string;

    FirstName: string;
    LastName: string;

    getDetails(): string { // method implementation
        return `${this.FirstName} ${this.LastName} - ${this.EMP_ID}`;
    }
}

class Customer implements IPerson {
    CUST_ID: string;

    FirstName: string;
    LastName: string;

    getDetails(): string { // method implementation
        return `${this.FirstName} ${this.LastName} - ${this.CUST_ID}`;
    }
}