
const axios = require('axios');
// const date = Date.now

async function getFlightPrices(origin, destination, Date) {
  try {
    const response = await axios.get('https://www.makemytrip.com/flights/', {
      params: {
        origin,
        destination,
        Date
      }
    });

  
    const flights = [response.data]
    const formattedPrices= []
    flights.forEach(flight=>{
        formattedPrices[flight.airlines] = `₹${flight.price}`
    })
 // })
 console.log(formattedPrices)
} 
  catch (error) {
    console.error('Error retrieving flight prices:', error.message);
  }
}


getFlightPrices('Delhi', 'Jaipur','20May2023');


  

 


