$(document).ready(function () {

    // API KEY - CkxBCdOiAAp2R8Xc1Sx3OhEd1ZNVMLstYdcGybR1
    // default api - iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv

    // source data - https://crime-data-explorer.fr.cloud.gov/api

    // https://api.usa.gov/crime/fbi/sapi/api/participation/national?api_key=


    // ori7 lookup - alameda sheriffs - CA00100
    // ori9 lookup - alameda sheriffs - CA0010000  
    // https://api.usa.gov/crime/fbi/sapi/api/summarized/agencies/CA00100/offenses/2018/2020?API_KEY=CkxBCdOiAAp2R8Xc1Sx3OhEd1ZNVMLstYdcGybR1

    // working - https://api.usa.gov/crime/fbi/sapi/api/agencies?api_key=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv
    // working - https://api.usa.gov/crime/fbi/sapi/api/data/arrest/states/ca/dui/monthly/2018/2019?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv
    // working - https://api.usa.gov/crime/fbi/sapi/api/data/supplemental/agency/CA0010000/property_type/2018/2019?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv


    // motor-vehicle-theft
    // working https://api.usa.gov/crime/fbi/sapi/api/data/supplemental/motor-vehicle-theft/agency/CA0010000/OFFENSE/2018/2019?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv

    //car theft alameda sheriffs office
    //https://api.usa.gov/crime/fbi/sapi/api/data/supplemental/motor-vehicle-theft/agency/CA0010000/OFFENSE/2018/2019?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv


    // $(document).ready(function () {

    //jquery.val() user choice for dropdown

    //use the drop down menu ties to city name, which is then tied to index value for ORI

    // var oaklandORI = "CA0010900"
    // var berkeleyORI = "CA0010300"
    // var sanFranciscoORI = "CA0380100"
    //oakland  ,  berkeley  ,   SF

    var cityIndex = {
        "CA0010900": "Oakland",
        "CA0010300": "Berkeley",
        "CA0380100": "San Francisco"
    }
    $("#myselect").on("click", function () {
        const cityORI = $(this).val();
        const cityName = cityIndex[cityORI];
        console.log(cityORI);
        console.log(cityName, " has been clicked");
        var queryURL = "https://api.usa.gov/crime/fbi/sapi/api/data/supplemental/motor-vehicle-theft/agency/" + cityORI + "/OFFENSE/2018/2019?API_KEY=iiHnOKfno2Mgkt5AynpvPpUQTEyxE77jo1RU8PIv";
        $.ajax({
            url: queryURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            $("#theftyear").text("Year: " + response.results[0].data_year);
            $("#theftcount").text("Theft Count: " + response.results[0].actual_count);
            $("#theftvalue").text("$" + response.results[0].stolen_value_total)
        })
    });

});