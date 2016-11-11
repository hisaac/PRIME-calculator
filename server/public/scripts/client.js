$(document).ready(function () {
  $('button').on('click', function(){
    event.preventDefault();
    console.log('event:', event);
    console.log('this:', this);
  });
});

// function performCalculation(event){
//   event.preventDefault();
//   console.log('event:', event);
//   console.log('this:', this);
  // getValues();
  // sendValues(num1, num2);
// }

// //gets values from dom
// function getValues(){
//
// }
//
// // sends values to server for calculation
// function sendValues(num1, num2){
//   $.ajax({
//     type: 'POST',
//     url: '/calculate',
//     success: function(req, res){
//       req.send(num1, num2);
//     },
//     error: function(){
//       alert('there was an error');
//     }
//   });
// }
//
// // gets answer from server
// function getAnswer(){
//   $.ajax({
//     type: 'GET',
//     url: '/calculate',
//     success: function(req, res){},
//     error: function(){}
//   });
// }
//
// // appends answer to dom
// function appendAnswer(){
//
// }
