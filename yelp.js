$(document).ready(function () {
  // Parameters for yelp AJAX call
  function renderYelp(){
    $("#yelp").empty();
    let term = $("#foodCategory").val();
    let city = $("#myselect option:selected").text();
    let radius = $("#radius option:selected").val();
    let radiusMeters = calculateMeters(radius);
    function calculateMeters(radius) {
      if (radius === "5") {
        newRadius = 8047;
      } else if (radius === "10") {
        newRadius = 16093
      } else {
        newRadius = 32187;
      }
      return newRadius;
    }
    let queryUrl = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${city}&radius=${radiusMeters}`;

    // AJAX call to render yelp search results
    $.ajax({
      url: queryUrl,
      method: "GET",
      dataType: "json",
      headers: {
        Authorization: "Bearer sSXTcvOqTr7PrnuDes2jfZuJfEVAFUmgxUEkl_nGtXmHpuspCLaFSmhYXlZ13UkbTxc-WgsPM0ZrZPIP9NV0bVsC4V7Ws0j3unKYYryXOiUwhDMZ7NNEZmjJkhx1X3Yx"
      }
    }).then(function (response) {
      let businesses = response.businesses;
      for (let i = 0; i < businesses.length; i++) {
        let bizResult = businesses[i];
        let bizName = bizResult.name;
        let bizUrl = bizResult.url;
        let bizUrlEl = $(`<a href="${bizUrl}" target="_blank">${bizName}</a>`);
        let bizPhone = bizResult.display_phone;
        let bizPhoneEl = $(`<p>Phone: ${bizPhone}</p>`);
        let bizPic = bizResult.image_url;
        let bizPicEl = $(`<img src="${bizPic}" alt="${bizName} Yelp image"/>`).addClass('pic');
        let bizAddress = bizResult.location.address1;
        let bizAddressEl = $(`<p>${bizAddress}</p>`);
        let bizPrice = bizResult.price;
        let bizPriceEl = $(`<p>${bizPrice}</p>`);
        let bizRating = bizResult.rating;
        let bizReviews = bizResult.review_count;
        let bizRateReview = $(`<p><span><img src="assets/regular_${bizRating}.png" alt="rating image"></span> ${bizReviews} reviews <span><img src="assets/burst_icon.png" alt="Yelp logo"></span></p>`)
        let yelpUl = $("<div>");
        yelpUl.append(bizPicEl, bizRateReview, bizUrlEl, bizPhoneEl, bizAddressEl, bizPriceEl);
        $("#yelp").append(yelpUl);
      }
    })
  }
  $("#search-btn").on("click", function(event){
    event.preventDefault();
    if ($("#foodCategory").val() === "" || $("#myselect option:selected").text() === "Choose a City"){
      return
    } else {
      renderYelp();
    }
  })
})