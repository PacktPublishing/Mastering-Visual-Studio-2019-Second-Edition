//#region number types
let decimalValue: number = 100.25;
let binaryValue: number = 0b10110010;
let hexaDecimalValue: number = 0xf210b;
let octalValue: number = 0o41530;
//#endregion number types

//#region string types
let firstName: string = “Kunal”;		// using double quotes
let lastName: string = ‘Chowdhury’;	// using single quotes

let authorName: string = “Kunal Chowdhury”;
let blogURL: string = “https://www.kunal-chowdhury.com”; 
let message: string = `Hi, my name is ${authorName}.
 
I do blog at ${blogURL}. Don’t forget to visit it.`; 
//#endregion string types

//#region boolean types
let canExecute: boolean = false;
canExecute = true; 
//#endregion boolean types

//#region enum types
enum MessageType { 
    None, 		// value is ‘0’
    Information,	// value is ‘1’
    Warning,		// value is ‘2’
    Error			// value is ‘3’
}

let messageType: MessageType = MessageType.Information;

enum MessageType { 
    None = 1,       // value is '1'
    Information,    // value is '2'
    Warning,        // value is '3'
    Error           // value is '4'
}

enum MessageType { 
    None = 1,           // value is '1'
    Information = 3,    // value is '3'
    Warning = 5,        // value is '5'
    Error = 7           // value is '7'
}
//#endregion enum types

//#region void types
let stability: void = undefined;
let stability: void = null; 
//#endregion void types

//#region undefined types
let undefinedValue: undefined = undefined;
let undefinedNumber: number = undefined;
let undefinedBoolean: boolean = undefined;
//#endregion undefined types

//#region null types
let nullValue: null = null;
let nullableNumeric: number = null;
let nullableBoolean: boolean = null;
//#endregion null types

//#region any types
let dynamicValue: any = “Kunal Chowdhury”;
dynamicValue = 2019;
dynamicValue = 0b100110111001;
dynamicValue = 0o411021;
dynamicValue = true;

let dynamicList: any[] = [ “Mastering Visual Studio 2019”,
    “Kunal Chowdhury”,
    2019,
    True
  ];  
//#endregion any types

//#region never types
function throwError(message: string): never {
	throw new Error(message);
}
//#endregion never types

//#region array types
// approach one:
let books: string[] = [
    “Mastering Visual Studio 2017”,
    “Mastering Visual Studio 2019”,
    “Windows Presentation Foundation Development Cookbook”
    ];
    
    // approach two (generic way):
    let books: Array<string> = [
    “Mastering Visual Studio 2017”,
    “Mastering Visual Studio 2019”,
    “Windows Presentation Foundation Development Cookbook”
    ];    
//#endregion array types

//#region tuple types
let author: [string, number] = [“Kunal Chowdhury”, 2019];
let values: [string, number] = [“One”, 1, “Two”, 2];

let values: [string, number] = [“One”, 1];		// correct
let values: [string, number] = [“One”, 1, “Two”];	// correct
let values: [string, number] = [1, “One”];		// error
let values: [string, number] = [“One”, 1, 2];		// error
let values: [string, number] = [“One”, 1, true];	// error
//#endregion tuple types
