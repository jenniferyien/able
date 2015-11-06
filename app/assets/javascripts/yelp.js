
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
         $('<p>'+business.name+'</p>').appendTo('#results')
       })

      },
      error: function(xhr, data, error){
        console.log("error is "+ error)
      }
    });
})


})
