// Write a function using the movieList array and sort the movies by their release date, starting with the most recent release date. Return the sorted array.
// A movie with a release date of 2015 should come before a movie with a release date of 2010. 

// let order = (x >= )

// const movieList = []
// movieList.sort()

const organizedMovie = movieList.sort()


organizedMovie.sort(function(a,b) {
    return (a.year - b.year) || (monthsArray/indexOf(a.month) - monthsArray.indexOf(b.month)); 
})
console.log(organizedMovie);



// console.log(organizedMovie);

// function compareMovie(movieList){
//     if movieList.release_date >= 2015

// };

// console.log(movieList)