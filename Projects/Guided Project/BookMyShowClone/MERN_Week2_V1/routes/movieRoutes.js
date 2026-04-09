//Handles reqs related to movie
const express=require("express");
const{authMiddleware}=require("../middleware/authMiddleware");
const {getHome,getAllMovies,getMovieById,
    addMovie,updateMovie,deletedMovie}=require("../controllers/movieController");
const roleMiddleware = require("../middleware/roleMiddleware");

const router=express.Router();
//fetching homepage
router.get("/",getHome);
//fetching the details of movies
router.get("/movies",getAllMovies);
//fetching the movies using id
router.get("/movies/:id",getMovieById);
//Adding new movie
router.post("/movies",authMiddleware,roleMiddleware("admin"),addMovie);
//updating the existing movie
router.put("/movies/:id",authMiddleware,roleMiddleware("admin"),updateMovie)
//deleting the movie
router.delete("/movies/:id",authMiddleware,roleMiddleware("admin"),deletedMovie)

module.exports=router;