// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {
  return array.map(movie => movie.director)
}

// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  return array.filter(movie => movie.director === director)
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  const moviesArray = getMoviesFromDirector(array, director)
  const scores = moviesArray.map(movie => movie.score)
  let scoreAverage = scores.reduce((a, b) => a + b) / scores.length
  return Math.round(scoreAverage * 100) / 100
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  const alphabeticArray = array.map((movies) => movies.title);
  alphabeticArray.sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() > b.toLowerCase()) return 1;
  });
  return alphabeticArray.slice(0, 20);
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  const newArray = [...array].sort((a, b) => {
    if (a.year < b.year) return -1;
    if (a.year > b.year) return 1;
    if (a.title.toLowerCase() < b.title.toLowerCase()) return -1;
    if (a.title.toLowerCase() > b.title.toLowerCase()) return 1;
  });
  return newArray;
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array, genre) {
  let moviesNoScore = 0
  const genreMovies = array.filter(movie => movie.genre.includes(genre));
  const scores = genreMovies.map(movie => {
    if (!movie.score) moviesNoScore++
    return movie.score;
  });
  let scoreAverage = scores.reduce((a, b) => a + b) / (scores.length - moviesNoScore);
  return Math.round(scoreAverage * 100) / 100;
}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes(array) {
  const timeArray = array.map(movie => movie.duration);
  for (let i = 0; i < timeArray.length; i++) {
    timeArray[i].replace("h", "").replace("min", "");
    const duration = timeArray[i].split(" ");
    let min = parseInt(duration[0]) * 60;
    if (duration[1])
      min += parseInt(duration[1]);
    timeArray[i] = min;
  }
  return array.map((movie, i) => { return { ...movie, duration: timeArray[i] } });
}

// Exercise 8: Get the best film of a year
function bestFilmOfYear(array, year) {
  const yearArray = array.filter(movie => movie.year === year);
  const yearArraySorted = yearArray.sort((a, b) => {
    if (a.score > b.score) return -1;
    if (a.score < b.score) return 1;
  })
  return yearArraySorted.slice(0, 1)
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
