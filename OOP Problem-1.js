// Create a new constructor function, Book, which logs books in the school library (id, title, author, tags[]). Add ids, titles, and authors for your two favorite books. Use the prototype keyword to add a tag property to the books. Create 5 book objects and add at least one tag to each of your books.

function Book(id, title, author, tag = []) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.tag = tag;
}

Book.prototype.setTag = function (book) {
  this.tag = [...this.tag, book];
};

Book1 = new Book(1, "To Kill a Mockingbird", "Harper Lee");
Book1.setTag("Novel");

Book2 = new Book(2, "The Great Gatsby", "F. Scott Fitzgerald");
Book3 = new Book(3, "Anne Frank: The Diary of a Young Girl", "Anne Frank");
Book4 = new Book(4, "Gulliver's Travels", "Jonathan Swift");
Book4.setTag("fantasy");
Book5 = new Book(5, "Life of Pi", "Yann Martel");

console.log(Book4);

// A school's film club wants to store details of the films it has studied so far this year. Create a new class to do this. We want to store the following data about each film: id, title, director, releaseYear, and genres.
// Create two methods in the class: one for adding multiple genres to the films - addGenre(genre) - and one to get the title of the film - getFilmTitle().
// Instantiate a new instance of the class using data from your favorite film. Add at least 1 genre to your film using addGenre(), and get the title using getFilmTitle()

class FilmDetails {

  constructor(id, title, director, releaseYear, genre = []) {
    this.id = id;
    this.title = title;
    this.director = director;
    this.releaseYear = releaseYear;
    this.genre = genre;
  }

  addGenre(genres) {
    this.genre = [...this.genre, genres];
  }

  getFilmTitle() {
    return `Title: ${this.title}`;
  }
}

class FavouriteFilm extends FilmDetails {
  constructor(id, title, director, releaseYear, genre = []) {
    super(id, title, director, releaseYear);
    this.genre = genre;
  }
}

favFilm1 = new FavouriteFilm(
  4,
  "Life of Pi",
  "Ang Lee",
  2012,
  ["Philosophical fiction"]
);
favFilm1.addGenre("Novel");
console.log(favFilm1);
console.log(favFilm1.getFilmTitle());

