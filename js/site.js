// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});

function validateForm(){
  var x = document.form["myForm"]["name_field"].value;
  if (x==""){
    alert("Name must be filled out");
    return false;
  }
}
