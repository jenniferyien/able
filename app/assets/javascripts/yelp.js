
$(function(){
    $("#submit").click(function(event){
    event.preventDefault()
    var searchInfo = $('#search').val()
    console.log(searchInfo)
    $.ajax({
      url:"/resturants_info/"+searchInfo,
      method: "POST",
      success: function(data,success,xhr){
       console.log(data.businesses[0])
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
    $("#addReview").click(function(){
      var review_data = {
        comment: $("#comment").val(),
        user_id: $("#user_id").val(),
        resturant_id: $("#resturant_id").val()
      }
      $.ajax({
        url: "/posts",
        method: "POST",
        data: review_data,
        success: function(data,success,xhr) {
          
        }
      })
    });


})


