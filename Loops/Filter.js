let books = [
    { title: "The Silent Patient", genre: "Thriller", publish: 2019, edition: "1st" },
    { title: "Atomic Habits", genre: "Self-help", publish: 2018, edition: "3rd" },
    { title: "Educated", genre: "Memoir", publish: 2018, edition: "1st" },
    { title: "Where the Crawdads Sing", genre: "Fiction", publish: 2018, edition: "2nd" },
    { title: "Sapiens", genre: "History", publish: 2011, edition: "4th" },
    { title: "The Midnight Library", genre: "Fantasy", publish: 2020, edition: "1st" },
    { title: "Becoming", genre: "Autobiography", publish: 2018, edition: "1st" },
    { title: "The Alchemist", genre: "Adventure", publish: 1988, edition: "5th" },
    { title: "Rich Dad Poor Dad", genre: "Finance", publish: 1997, edition: "3rd" },
    { title: "The Book Thief", genre: "Historical Fiction", publish: 2005, edition: "2nd" },
    { title: "Dune", genre: "Science Fiction", publish: 1965, edition: "6th" },
    { title: "1984", genre: "Dystopian", publish: 1949, edition: "4th" },
    { title: "To Kill a Mockingbird", genre: "Finance", publish: 1960, edition: "5th" },
    { title: "The Power of Now", genre: "Spirituality", publish: 1997, edition: "2nd" },
    { title: "Harry Potter and the Sorcerer's Stone", genre: "Fantasy", publish: 1997, edition: "7th" },
    { title: "The Great Gatsby", genre: "Classic", publish: 1925, edition: "3rd" },
    { title: "The Subtle Art of Not Giving a F*ck", genre: "Self-help", publish: 2016, edition: "1st" },
    { title: "Think and Grow Rich", genre: "Motivation", publish: 1937, edition: "6th" },
    { title: "The Hobbit", genre: "Fantasy", publish: 1937, edition: "4th" },
    { title: "A Brief History of Time", genre: "Science", publish: 1988, edition: "3rd" }
  ];

//   let userBooks = books.filter((bok) => bok.publish === 1997 )

// with scope add return must 
// let userBooks = books.filter((bok) => {return bok.genre === "Finance"})

let userBooks = books.filter((bok) => bok.publish >= 2000 && bok.edition === "2nd")
  
  console.log(userBooks);
  