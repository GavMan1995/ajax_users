$(document).ready(function(){
  baseUrl = 'http://devpoint-ajax-example-server.herokuapp.com/api/v1/users';
  if(location.pathname === '/'){
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

});
