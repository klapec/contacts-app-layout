$(function(){

  var pathname       = window.location.pathname;
  var contactName    = $('.contact-name');
  var contactCompany = $('.contact-company');
  var tagCompany     = $('.tag-company');
  
  $.getJSON('/contacts.json', function(data) {
    $.each(data, function(key, val) {
      contactName[key].innerHTML = val.name;
      contactCompany[key].innerHTML = val.company;
      tagCompany[key].innerHTML = val.company;
    });
  });
  
});
