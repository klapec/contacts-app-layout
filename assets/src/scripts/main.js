$(function(){

  var pathname         = window.location.pathname;
  var contactsLocation = pathname + 'contacts.json';
  var contactName      = $('.contact-name');
  var contactCompany   = $('.contact-company');
  var tagCompany       = $('.tag-company');
  
  $.getJSON(contactsLocation, function(data) {
    $.each(data, function(key, val) {
      contactName[key].innerHTML = val.name;
      contactCompany[key].innerHTML = val.company;
      tagCompany[key].innerHTML = val.company;
    });
  });
  
});
