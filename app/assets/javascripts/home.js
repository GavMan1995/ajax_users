$(document).ready(function(){
  baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users';
function getUsers(){
  $('#user').empty();
  $.ajax({
    url: baseUrl,
    type: 'GET',
    dataType: 'JSON',
    success: function(data){
      var tbody = $('#user');
      data.users.forEach(function(user){
        var firstName = user.first_name;
        var lastName = user.last_name;
        var phone = user.phone_number;
        var row = '<tr><td>' + firstName + '</td>';
        row += '<td>' + lastName + '</td>';
        row += '<td>' + phone + '</td>';
        tbody.append(row);
      });
    },
    error: function(error){
      console.log(error);
    },

  });
}
getUsers();

 $('#new_user').submit(function(e){
   e.preventDefault();
   var firstName = $(this).find('#user_first_name').val();
   var lastName = $(this).find('#user_last_name').val();
   var phone = $(this).find('#user_phone').val();

   $.ajax({
     url: baseUrl,
     type: 'POST',
     data: {user: {first_name: firstName, last_name: lastName, phone_number: phone}},
     success: function(data){
       getUsers();
     },

     error: function(data){
       console.log(data);
     }
   });
 });

});
