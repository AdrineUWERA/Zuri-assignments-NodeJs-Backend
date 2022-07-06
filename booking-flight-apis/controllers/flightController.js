const Flight = require("../models/Flight")

//creates a new flight
exports.bookFlight = async (req, res) => {
 // checks the entry of the request
  if (!req.body) {
    return res.status(400).json({ message: "Fill all fields." });
  }

  try {
    // gets the entries from req
    const { title, time, price, date } = req.body;
    // creates a flight with the details provided
    const flight = await Flight.create({
        title: title,
        time: time,
        price: price,
        date: date
    });
    // saves the new flight in the database
    const flightCreated =  await flight.save();

    // the response message to the user if the booking was successful(status 201)
    res.status(201).json({
        message: "Flight successfully booked!",
        data: flight,
    });
    
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error: ${err}`,
    });
  }
}

// Loads all flights saved in the database
exports.getAllFlights = async (req, res) => {
    // retrieve all flights stored in the database
    const flight = await Flight.find({});
    try{
        // response msg to the user if the retrieval was successful
        res.status(200).json({ flights: flight});
    } catch (err) {
        res.status(500).json({
        message: "Something went wrong while loading all flights",
        error: `Error: ${err}`,
        });
    };
};


// gets the specific flight with provided id in the url
exports.getSpecificFlight = async (req, res) => {
    try {
        const flightId = req.params.id;
        const flight = await Flight.findById(flightId);
        if (flight) {
        res.status(200).json({ flight });
        } else{
        return res.status(404).json({ error: "There is no flight with the provided id" });
        }

    } catch (err) {
        res.status(500).json({
        message: "Something went wrong",
        error: `Error: ${err}`,
        });
    }
};


// deletes a flight from the database
exports.deleteFlight = async (req, res) => {
  try {
    const flight = await Flight.findById(req.params.id);
    //checks if the flight exists
    if (flight) {
      //deletes the flight
      const deletedFlight = await Flight.findByIdAndDelete(req.params.id);
      return res.status(204).json({ }); 
    } else{
      res.status(204).json({ });
    }
  } catch (err) {
    res.status(500).json({
      message: "Something went wrong",
      error: `Error: ${err}`
    });
  }
};

//updates the flight details
exports.updateFlight = async (req, res) => {
    try {
      const flightId = req.params.id;
      const flight = await Flight.findById(flightId);
      if (flight) {
        //updates the flight
        const flightUpdated = await Flight.findByIdAndUpdate(flightId, req.body);
        const updatedflight = await Flight.findById(flightId);
        res.status(204).json({ });
      } else{
        return res.status(404).json({ error: "There is no flight with that id" });
      }
  
    } catch (err) {
      res.status(500).json({
        message: "Something went wrong",
        error: `Error: ${err}`,
      });
    }
};