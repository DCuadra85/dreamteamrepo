$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=san+francisco",
    method: "GET",
    dataType: 'json',
    headers: {
      Authorization: "Bearer sSXTcvOqTr7PrnuDes2jfZuJfEVAFUmgxUEkl_nGtXmHpuspCLaFSmhYXlZ13UkbTxc-WgsPM0ZrZPIP9NV0bVsC4V7Ws0j3unKYYryXOiUwhDMZ7NNEZmjJkhx1X3Yx"
    }
  }).then(function(response) {
    console.log(response);
  })