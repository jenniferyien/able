// $(function(){
//   $("#submit").click(function(event){
//     event.preventDefault;
//     var searchInfo = $('#search').val()
//     console.log(searchInfo)
//     $.ajax({
//       url:"/resturants_info/"+searchInfo,
//       method: "POST",
//       success: function(data,success,xhr){
//         var search = $.makeArray(data)
//         search.forEach(function(business){
//           console.log(business)
//         })
//         // $('#information').html(data)
//         // $('#information').appendTo('#body')
//         window.location = '/resturants'
//       },
//       error: function(xhr, data, error){
//         console.log("error is "+ error)
//       }
//
//     });
//   })
// })
