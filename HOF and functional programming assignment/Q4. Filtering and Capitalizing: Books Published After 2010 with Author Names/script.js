const books = [
    {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        year: 1951
    },
    {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
    },
    {
        title: "1984",
        author: "George Orwell",
        year: 1949
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        year: 2008
    },
    {
        title: "The Girl with the Dragon Tattoo",
        author: "Stieg Larsson",
        year: 2005
    }
];

const filteredBooks = books.filter(book => book.year >= 2010);

const formattedBooks = filteredBooks.map(book => {
    const capitalizedAuthor = book.author.toUpperCase();
    return {
        title: book.title,
        author: capitalizedAuthor,
        year: book.year
    };
});

console.log(formattedBooks);