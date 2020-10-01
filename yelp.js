$.ajax({
    url: "https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=pizza&location=oakland",
    method: "GET",
    dataType: 'json',
    headers: {
      Authorization: "Bearer sSXTcvOqTr7PrnuDes2jfZuJfEVAFUmgxUEkl_nGtXmHpuspCLaFSmhYXlZ13UkbTxc-WgsPM0ZrZPIP9NV0bVsC4V7Ws0j3unKYYryXOiUwhDMZ7NNEZmjJkhx1X3Yx"
    }
  }).then(function(response) {
    console.log(response);
  })

  var settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://covid-19-statistics.p.rapidapi.com/provinces?iso=USA",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "covid-19-statistics.p.rapidapi.com",
		"x-rapidapi-key": "01023f3f8bmsh79a54f21d151621p10c1f7jsn246ba5f2e27a"
	}
}

$.ajax(settings).done(function (response) {
	console.log(response);
});