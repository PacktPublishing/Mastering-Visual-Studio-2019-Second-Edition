abstract class Person {
	abstract getFullName(): string;	// abstract method
	abstract getAge(): number;		// abstract method

	toString(): string {
		return "Age of " + this.getFullName() + " is: " + this.getAge();
	}
}