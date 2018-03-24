    var API_KEY= "e3273b662b547351e40347999d9197ae";
    var userInput = "brewery";
    var searchURL = `https://api.yelp.com/v3/businesses/search?term=${userInput}&location=lossangles&locale=en_US&limit=35&open_now=true`;
    var uri = `locquery/${API_KEY}`;
    var axios = require('axios');

    axios({
      url: searchURL,
      headers: {'Authorization': 'Bearer _1IlqEousjPMs-KQQTSxNluHAQlVh83Qhu-amg0LTgecHhP9MNPlKeZ_0aJlmebZIego8RP8mKOaM7BoNVBlpCfulqgej2jpLP9XDBKIdWN5baR2QP5YQT1j8g2zWnYx'}
    }).then(response =>{
      let businesses = response.data.businesses;
      for (let i = 0; i < businesses.length; i++){
        console.log(`name of business: ${businesses[i].name}`);
        console.log(`name of city: ${businesses[i].location.city}`);
        console.log(`price range: ${businesses[i].price}`);
        console.log(`rating: ${businesses[i].rating}`);
        console.log(`number of business: ${businesses[i].display_phone}`);
      };

    }
  );
