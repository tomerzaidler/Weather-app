const request = require('request');

const forecast = (latitude, longitude, callback)=>{

  const url = 'https://api.darksky.net/forecast/face1a41dc929cd91ea9767e0d264d52/' + latitude + ',' + longitude + '?units=si';

  request({url: url, json: true}, (error,response)=>{
    if(error)
    {
      callback('Unable to conect to location services!', undefined);
    }
    else if(response.body.error)
    {
      callback('Unable to find location, Try another search', undefined)
    }
    else
    {
      callback(undefined,`${response.body.daily.data[0].summary} It is currently ${response.body.currently.temperature} degrees out. This High today is ${response.body.daily.data[0].temperatureHigh} with a low of ${response.body.daily.data[0].temperatureLow}. There is a ${response.body.currently.precipProbability}% chance of rain.`);
    }

  });

};

module.exports = forecast;