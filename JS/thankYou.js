src="https://code.jquery.com/jquery-3.6.0.js"
integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk="
crossorigin="anonymous"

$(document).ready(function(){
    let drp = true;
    $('#dropContent').hide();
    $('#dropDown').hover(function() {
        if(drp === true) {
            $('#dropContent').fadein();
            drp = false;
        } else {
            $('#dropContent').fadeOut();
            drp = true;
        }
    })
});