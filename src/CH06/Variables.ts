function Book(publicationDate: number) {
    if (publicationDate == 2019) {
        var bookTitle = "Mastering Visual Studio 2019";
    }

    return bookTitle;
}

console.log(Book(2019)); // prints "Mastering Visual Studio 2019"
console.log(Book(2018)); // prints "undefined"



function GetBook(title: string, year: number) {
    var title = "Mastering Visual Studio 2017";
    
    var title = "Windows Presentation Foundation " + 
                "Development Cookbook"; // no error
    
    if (year == 2019) {
        var title = "Mastering Visual Studio 2019"; // no error
        
    }
}

function Book(publicationDate: number) {
    if (publicationDate == 2019) {
        let bookTitle = "Mastering Visual Studio 2019";
    }

    return bookTitle; // error: can't find name 'bookTitle'
}

function GetBook(title: string, year: number) {
    let title = "Mastering Visual Studio 2017";
    
    // error: duplicate identifier 'title'
    let title = "Windows Presentation Foundation " + 
                "Development Cookbook";
    
    if (year == 2019) {
        let title = "Mastering Visual Studio 2019"; // no error
        
    }
}

const author = "Kunal Chowdhury";
author = "some other author"; // error: can't assign to 'author' because it is a constant
