$(function(){
    $("#submit").click(function(event){
    event.preventDefault()
    var searchInfo = $('#search').val()
    console.log(searchInfo)
    $.ajax({
      url:"/resturants_info/"+searchInfo,
      method: "POST",
      success: function(data,success,xhr){
       console.log(data)
      },
      error: function(xhr, data, error){
        console.log("error is "+ error)
      }

    });
  })
})
