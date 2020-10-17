const numberOfFilms = +prompt("сколько фильмов уже посмотрели?" , "");
const personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    ganres: [],
    privat: false
};

const a = prompt('один из последних просмотреных фильмов?', ''),
      b = prompt('На сколько вы его оцените?',''),
      c = prompt('один из последних просмотреных фильмов?', ''),
      d = prompt ('На сколько вы его оцените?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);