$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=san+francisco",
    method: "GET",
    dataType: 'json',
    headers: {
      Authorization: "Bearer YOUR_API_KEY_HERE"
    }
  }).then(function(response) {
    console.log(response);
  })