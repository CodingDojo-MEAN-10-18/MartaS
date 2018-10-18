// 1 hour

$(document).ready(function(){
    var get = $.get("https://api.github.com/users/mroses", displayName)
    function displayName(data) {
        console.log(data.name)
        $('#name_button').click(function() {
            $('#myname').append(data.name);
        });
    };
})
