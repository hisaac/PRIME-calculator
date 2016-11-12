$(document).ready(function () {
  // listens for click of a number button
  $('.number-button').on('click', function(){
    event.preventDefault();
    appendNumber(this);
  });

  // listens for click of an operation button
  $('.operate').on('click', function(){
    event.preventDefault();
    sendValues(getValues(this));
  });

  // clears form when 'clear' button is pressed
  $('#clear').on('click', function(){
    event.preventDefault();
    document.getElementById("calculator").reset();
    $('#result').empty();
  });
});

// appends number to readout field
function appendNumber (element) {
  button = $(element).text();
  if (button === '.' && $('#readout').val().indexOf('.') < 0){
    $('#readout').val($('#readout').val() + button);
  } else if (button !== '.'){
    $('#readout').val($('#readout').val() + button);
  }
}

// gets values from dom
function getValues(operation){
  var toCalculate = {};
  toCalculate.type = operation.getAttribute('id');

  $.each($('form').serializeArray(), function(i, field){
    toCalculate[field.name] = field.value;
  });

  return toCalculate;
}

// sends values to server for calculation
function sendValues(toCalculate){
  $.ajax({
    type: 'POST',
    url: '/calculate/' + toCalculate.type,
    data: toCalculate,
    success: function(data){
      getAnswer();
    },
    error: function(error){
      alert('There was an error when sending your data to the server.', error);
    }
  });
}

// gets answer from server
function getAnswer(){
  $.ajax({
    type: 'GET',
    url: '/calculate',
    success: function(data){
      appendAnswer(data);
    },
    error: function(error){
      console.log('There was an error retrieving your data from the server.', error);
    }
  });
}

// appends answer to dom
function appendAnswer(answer){
  $('#result').text('Answer = ' + answer.value);
}
