function logBookTitlesInAlphabeticalOrder(books, callback) {
    const bookTitles = books.map(book => book.title);
    const sortedTitles = bookTitles.sort();
    callback(sortedTitles);
}

// Example usage:
const books = [
    { title: "1984", author: "George Orwell", year: 1949 },
    { title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960 },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925 }
];

function printBookTitles(titles) {
    console.log("Book titles in alphabetical order:");
    titles.forEach(title => console.log(title));
}

logBookTitlesInAlphabeticalOrder(books, printBookTitles);