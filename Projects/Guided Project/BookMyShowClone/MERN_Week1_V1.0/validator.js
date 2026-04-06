//callback based validation functions

function validateMovieSelection(movies,movieId,callback){
    const selectedMovie=movies.find((movie)=>movie.id=== movieId);

    if(!selectedMovie){
        return callback("Invalid movie selection. Choose a valid movieId.",null);
    }
    callback(null,selectedMovie);
}

function validateTimeSelection(movie,selectedTime,callback){
    const selectedShowTime=movie.showtimes.find((show)=>show.time.toLowerCase()=== selectedShowTime.toLowerCase());

    if(!selectedShowTime){
        return callback("Invalid time slot selected. Choose a valid Time Slot.",null);
    }
    callback(null,selectedShowTime);
}

//validate seat count
function validateSeatCount(seatcount,callback){
    if(!isNaN(seatcount) || seatcount<=0){
        return callback("Invalid seatcount.Enter a valid seatcount.",null);
    }
    callback(null,seatcount);
}

module.exports={
    validateMovieSelection,validateTimeSelection,validateSeatCount
};