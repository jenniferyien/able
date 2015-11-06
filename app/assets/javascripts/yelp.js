

$(function(){
    $("#submit").click(function(event){
    event.preventDefault()
    var searchInfo = $('#search').val()
    console.log(searchInfo)
    $.ajax({
      url:"/resturants_info/"+searchInfo,
      method: "POST",
      success: function(data,success,xhr){
      //  console.log(data.businesses[0])
      function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: data.region.center.latitude, lng: data.region.center.longitude},
          zoom: 11
        });
        var dat = (data.businesses)
        // console.log(dat)
        var places = []
        for(var i = 0; i<dat.length; i++){
        // console.log(typeof dat[i].location.coordinate.latitude)
        // console.log("name is " + dat[i].name +" location is "+ dat[i].location.coordinate.latitude +" "+ dat[i].location.coordinate.longitude)
        places.push({name: dat[i].name, latitude: dat[i].location.coordinate.latitude, longitude: dat[i].location.coordinate.longitude});
        // lat.push(dat[i].location.coordinate.longitude);
        }
        // console.log(places)
        for(var i =0; i<places.length; i++){
          var marker = new google.maps.Marker({
            position: {lat: places[i].latitude, lng: places[i].longitude},
            map: map,
            title: places[i].name
          });
          marker.setMap(map)
        }
      }


      google.maps.event.addDomListener(window, 'load', initMap());
       $('#results').empty()
       data.businesses.forEach(function(business){
         var link = "/resturants/"+business.phone
         $('<p><a href='+link+'>'+business.name+'</a></p>').appendTo('#results')
       })

      },
      error: function(xhr, data, error){
        console.log("error is "+ error)
      }
    });
})


})
