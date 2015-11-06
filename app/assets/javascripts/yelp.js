

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
         var info = $('<div class="panel panel-default"/>')
         var heading = $('<div class="panel-heading"><a href='+link +'>'+business.name+'</a></div>')
         var body = $('<div class="panel-body"/>')
         var image = $('<div class="col-md-3"><img src='+business.image_url+'></div>')
         var base = $('<div class="col-md-8"><p>Yelp Rating:'+ business.rating+' </p><p>Number of Yelp Reviews:' + business.review_count +'</p><p>Food Type:'+ business.categories +' </p><p>Address: '+business.location.display_address +'</p><p>Phone Number: '+business.phone +'</p></div>')
         image.appendTo(body)
         base.appendTo(body)
         heading.appendTo(info)
         body.appendTo(info)


         info.appendTo('#results')
       })

      },
      error: function(xhr, data, error){
        console.log("error is "+ error)
      }
    });
})


})
