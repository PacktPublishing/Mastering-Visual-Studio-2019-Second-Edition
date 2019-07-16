function Book(publicationDate: number) {
    if (publicationDate == 2019) {
        let bookTitle = "Mastering Visual Studio 2019";
    }

    return bookTitle; // error: can't find name 'bookTitle'
}