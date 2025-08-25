const movies = [
  {"title": "Inception", "year": 2010, "rating": 8.8, "genre": ["Action", "Sci-Fi"], "director": "Christopher Nolan"},
  {"title": "The Dark Knight", "year": 2008, "rating": 9.0, "genre": ["Action", "Crime", "Drama"], "director": "Christopher Nolan"},
  {"title": "Pulp Fiction", "year": 1994, "rating": 8.9, "genre": ["Crime", "Drama"], "director": "Quentin Tarantino"},
  {"title": "The Matrix", "year": 1999, "rating": 8.7, "genre": ["Action", "Sci-Fi"], "director": "Lana Wachowski, Lilly Wachowski"},
  {"title": "Fight Club", "year": 1999, "rating": 8.8, "genre": ["Drama"], "director": "David Fincher"}
];

// 1. Create an array of movie titles
const movieTitles = movies.map(movie => movie.title);
console.log("Movie Titles:", movieTitles);

// 2. Array of movies with a rating higher than 8.5
const highRatedMovies = movies.filter(movie => movie.rating > 8.5);
console.log("Movies with rating higher than 8.5:", highRatedMovies);

// 3. Sort in descending order by rating
const sortedByRating = movies.sort((a, b) => b.rating - a.rating);
console.log("Movies sorted by rating (descending):", sortedByRating);

// 4. Array of movies released after the year 2000
const moviesAfter2000 = movies.filter(movie => movie.year > 2000);
console.log("Movies released after 2000:", moviesAfter2000);

// 5. Sort the movies by year in ascending order
const sortedMoviesByYear = movies.sort((a, b) => a.year - b.year);
console.log("Movies sorted by year (ascending):", sortedMoviesByYear);

// 6. Create an object that counts the number of movies for each genre.
let genreCount = {};
const genres = movies.forEach(movie => {
    movie.genre.forEach(g => {
        if (genreCount[g]) {
        genreCount[g]++;
        } else {
        genreCount[g] = 1;
        }
    });
});
console.log("Genre Count:", genreCount);

// 7. Check if all movies have a rating higher than 7.
const isMoviesHigherThanSeven = movies.every(movie => movie.rating > 7);
console.log("All movies have rating higher than 7:", isMoviesHigherThanSeven);

// 8. Calculate the average rating of all movies.
const sum = movies.reduce((acc, movie) => acc + movie.rating, 0);
const averageRating = sum / movies.length;
console.log("Average rating of all movies:", averageRating);

// 9. Create an array of objects with only the title and rating of each movie.
const moviesTitleAndRating = movies.map(movie => ({title: movie.title, rating: movie.rating}));
console.log("Movies with only title and rating:", moviesTitleAndRating);

// 10. Check if there is at least one movie in the "Sci-Fi" genre.
const hasSciFiMovie = movies.some(movie => movie.genre.includes("Sci-Fi"));
console.log("Is there at least one Sci-Fi movie?:", hasSciFiMovie);

// 11. Check if there is at least one movie directed by "Quentin Tarantino".
const hasTarantinoMovie = movies.some(movie => movie.director === "Quentin Tarantino");
console.log("Is there at least one movie directed by Quentin Tarantino?:", hasTarantinoMovie);

// 12. Check if all movies were released after 1990.
const allMoviesAfter1990 = movies.every(movie => movie.year > 1990);
console.log("All movies were released after 1990:", allMoviesAfter1990);

// 13. Find the titles of all movies directed by "Christopher Nolan" that have a rating higher than 8.5, sorted by rating in descending order.
const nolanHighRatedMovies = movies
  .filter(movie => movie.director === "Christopher Nolan" && movie.rating > 8.5)
  .sort((a, b) => b.rating - a.rating)
  .map(movie => movie.title);
console.log("Christopher Nolan movies with rating higher than 8.5, sorted in descending order by rating:", nolanHighRatedMovies);

// 14. Calculate the average rating of movies released before the year 2000 that belong to the "Drama" genre.
const dramaMoviesBefore2000 = movies.filter(movie => movie.year < 2000 && movie.genre.includes("Drama"));
console.log("Drama movies before 2000:", dramaMoviesBefore2000);

const avgDramaBefore2000 = dramaMoviesBefore2000.reduce((acc, movie) => acc + movie.rating, 0) / dramaMoviesBefore2000.length;
console.log("Average rating of Drama movies released before 2000:", avgDramaBefore2000.toFixed(2));

// 15. Create an array of movie titles for movies with a rating higher than 8.5, sorted by their release year.
const titlesHighRatedSortedByYear = movies
  .filter(movie => movie.rating > 8.5)
  .sort((a, b) => a.year - b.year)
  .map(movie => movie.title);
console.log("Movie titles with rating higher than 8.5, sorted by release year:", titlesHighRatedSortedByYear);

// 16. Find the total number of genres covered by movies with a rating higher than 8.8.
const highRatedMoviesForGenres = movies.filter(movie => movie.rating > 8.8);
const highRatedGenres = [];
highRatedMoviesForGenres.forEach(movie => {
    movie.genre.forEach(g => {
        if (!highRatedGenres.includes(g)) {
        highRatedGenres.push(g);
        }
    });
});

console.log("Total number of unique genres in movies with rating higher than 8.8:", highRatedGenres.length);

// 17. Check if there is at least one movie in the dataset with a rating higher than 9.
const hasMovieHigherThanNine = movies.some(movie => movie.rating > 9);
console.log("Is there at least one movie with rating higher than 9?:", hasMovieHigherThanNine);

// 18. Check if all movies directed by "Christopher Nolan" have a rating higher than 8.5.
const allNolanMoviesHigherThanEightPointFive = movies
  .filter(movie => movie.director === "Christopher Nolan")
  .every(movie => movie.rating > 8.5);

console.log("All Christopher Nolan movies have rating higher than 8.5:", allNolanMoviesHigherThanEightPointFive);