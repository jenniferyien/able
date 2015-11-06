// var SearchPage = React.createClass({
//   //state for Search Pages
//   getInitialState: function(){
//     return {search: []}
//   },
//   //ajax to get all recipes available
//   componentDidMount: function(){
//     $.ajax({
//       url: '/resturants_info/'+"New York",
//       method: 'GET',
//       success: function(data, status, xhr){
//         this.setState({search: data})
//       }.bind(this)
//     })
//   },
//   render: function(){
//     var information = $.makeArray(this.state.search)
//     var info = information.map(function(searchInfo){
//       return (
//         <li>{searchInfo}</li>
//       )
//     })
//     return (
//       <div>
//         <form class="navbar-form navbar-left" role="search">
//           <div class="form-group">
//             <input type="text" id="search" class="form-control" placeholder="Search">
//           </div>
//           <button type="submit" id='submit' class="btn btn-default">Submit</button>
//         </form>
//         <ul>{info}</ul>
//       </div>
//     )
//   }
// })
