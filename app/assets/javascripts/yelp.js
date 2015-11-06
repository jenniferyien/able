$(function(){
    $("#submit").click(function(event){
    event.preventDefault()
    var searchInfo = $('#search').val()
    console.log(searchInfo)
    $.ajax({
      url:"/resturants_info/"+searchInfo,
      method: "POST",
      success: function(data,success,xhr){
       var searchedInfo = $.makeArray(data)
       console.log(searchedInfo)
       // searchedInfo.businesses.forEach(function(info){
       //  console.log(info)
       // })
      },
      error: function(xhr, data, error){
        console.log("error is "+ error)
      }

    });
  })
})
