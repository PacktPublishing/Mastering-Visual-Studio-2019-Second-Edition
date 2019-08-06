function Book(publicationDate: number) {
    if (publicationDate == 2019) {
        var bookTitle = "Mastering Visual Studio 2019";
    }

    return bookTitle;
}

console.log(Book(2019)); // prints "Mastering Visual Studio 2019"
console.log(Book(2018)); // prints "undefined"