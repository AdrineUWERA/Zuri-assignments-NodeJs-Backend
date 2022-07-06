const express = require('express');

const router = express.Router();
const {
    bookFlight, getAllFlights, 
    getSpecificFlight, deleteFlight, 
    updateFlight
} = require('../controllers/flightController');

// router.get('/', "controller.example")
router.post("/", bookFlight);

router.get("/", getAllFlights);

router.get("/:id", getSpecificFlight);

router.delete("/:id", deleteFlight);

router.patch("/:id", updateFlight);

module.exports = router;

