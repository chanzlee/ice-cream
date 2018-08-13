$(document).ready(function() {

var iceCream = ['chocolate', 'cookies and cream', 'vanilla']

iceCream.forEach(function(flavor){
  $(".output").append('<li>' + flavor + '</li>')
});
});
