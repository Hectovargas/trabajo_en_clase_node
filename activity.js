const express = require('express');
const router = express.Router();

router.get('/activity', async(req,res) => {
    try {

        const response = await fetch('https://bored-api.appbrewery.com/random');
        const data = await response.json();
        res.json(data);

    } catch(error){

        res.status(500).json({ error: 'No se pudo obtener la actividad' });
   
    }
});

module.exports = router;




/*
Get a Random Activity
Returns a randomly selected activity from the available activities.

Example Request:

GET https://bored-api.appbrewery.com/random
Example Response:

{
  "activity": "Learn Express.js",
  "availability": 0.25,
  "type": "education",
  "participants": 1,
  "price": 0.1,
  "accessibility": "Few to no challenges",
  "duration": "hours",
  "kidFriendly": true,
  "link": "https://expressjs.com/",
  "key": "3943506"
}
*/