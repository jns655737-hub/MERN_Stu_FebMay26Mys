//Handling reqs related to bookings
const express=require("express");
const{authMiddleware}=require("../middleware/authMiddleware");
const roleMiddleware = require("../middleware/roleMiddleware");
const {
    bookingValidationHandler,createBooking,
    getAllBookings,getMyBookings}=require("../controllers/bookingController")

const router=express.Router();

//create a booking/to book tickets
router.post("/bookings",authMiddleware,
            bookingValidationHandler,
            createBooking);

router.get("/bookings/me",authMiddleware,getMyBookings)
router.get("/bookings",roleMiddleware("admin"),authMiddleware,getAllBookings)

module.exports=router;