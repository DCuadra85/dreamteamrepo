// Update to select id val from html
let term = "burrito";
let city ="oakland";
let radius = 20;
let radiusMeters = calculateMeters(radius);
function calculateMeters (radius){
  if (radius === 5){
    newRadius = 8047;
  } else if (radius === 10){
    newRadius = 16093
  } else {
    newRadius = 32187;
  }
  return newRadius;
}
let queryUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${city}&radius=${radiusMeters}`;

$.ajax({
    url: queryUrl,
    method: "GET",
    dataType: 'json',
    headers: {
      Authorization: "Bearer sSXTcvOqTr7PrnuDes2jfZuJfEVAFUmgxUEkl_nGtXmHpuspCLaFSmhYXlZ13UkbTxc-WgsPM0ZrZPIP9NV0bVsC4V7Ws0j3unKYYryXOiUwhDMZ7NNEZmjJkhx1X3Yx"
    }
  }).then(function(response) {
    console.log(response);
    // append results as a list in an empty div
  })