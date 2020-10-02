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
    let businesses = response.businesses;
    // Create for loop to go through the full object
    for (let i = 0; i < businesses.length; i++){
      let bizResult = businesses[i];
      let bizName = bizResult.name;
      let bizNameLi = $(`<li>${bizName}</li>`);
      let bizPhone = bizResult.phone;
      let bizPhoneLi = $(`<li>${bizPhone}</li>`);
      let bizPic = bizResult.image_url;
      let bizPicLi = $(`<li>${bizPic}</li>`);
      let bizAddress = bizResult.location.address1;
      let bizAddressLi = $(`<li>${bizAddress}</li>`);
      let bizPrice = bizResult.price;
      let bizPriceLi = $(`<li>${bizPrice}</li>`);
      let bizRating = bizResult.rating;
      let bizRatingLi = $(`<li>${bizRating}</li>`);
      let bizReviews = bizResult.review_count;
      let bizReviewsLi = $(`<li>${bizReviews}</li>`);
      let bizUrl = bizResult.url;
      let bizUrlLi = $(`<li>${bizUrl}</li>`);
      let yelpUl = $("<ul>");
      yelpUl.append(bizNameLi, bizPhoneLi, bizPicLi, bizAddressLi, bizPriceLi, bizRatingLi, bizReviewsLi, bizUrlLi);
      console.log(yelpUl);
    }
  })