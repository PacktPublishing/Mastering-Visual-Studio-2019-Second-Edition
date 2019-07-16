function GetBook(title: string, year: number) {
    let title = "Mastering Visual Studio 2017";
    
    // error: duplicate identifier 'title'
    let title = "Windows Presentation Foundation " + 
                "Development Cookbook";
    
    if (year == 2019) {
        let title = "Mastering Visual Studio 2019"; // no error
        
    }
}