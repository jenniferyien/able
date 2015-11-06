$(function(){
  $("#submit").click(function(event){
    event.preventDefault;
    $.ajax({
      url:"/resturants_info",
      method: "GET",
      success: function(data,success,xhr){
        console.log(data)
      },
      error: function(xhr, data, error){
        console.log("error is "+ error)
      }

    });
  })
})
