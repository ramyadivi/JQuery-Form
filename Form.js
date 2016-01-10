$(document).ready(function() {

    $('input')[0].oninput = function() {
        sUp = /^[A-Za-z]+$/;
        sUser = $('#userName').val();
        if (sUser.match(sUp)) {
            $('#right').css("display", "block");
            $('#crossmark').css("display", "none");
            $('#uname').addClass("has-success");
            $('#uname').removeClass("has-error");

        } else {
            $('#crossmark').css("display", "block");
            $('#right').css("display", "none");
            $('#uname').addClass("has-error");
        }
    };


    $('input')[1].oninput = function() {
        nAmt = $('#Amount').val();
        if (nAmt > 0) {
            $('#right1').css("display", "block");
            $('#amt').addClass("has-success");
            $('#crossmark1').css("display", "none");
            $('#amt').removeClass("has-error");

        } else {
            $('#crossmark1').css("display", "block");
            $('#amt').addClass("has-error");
            $('#right1').css("display", "none");
        }

    };


    $('input')[2].oninput = function() {
        sPp = /^.+$/;
        sPwd = $('#Password').val();
        if (sPwd.match(sPp) && sPwd.length < 10) {
            $('#right2').css("display", "block");
            $('#pwd').addClass("has-success");
            $('#crossmark2').css("display", "none");
            $('#pwd').removeClass("has-error");

        } else {
            $('#right2').css("display", "none");
            $('#crossmark2').css("display", "block");
            $('#pwd').addClass("has-error");
        }

    };


    $('#buttn').click(function() {
        $('#heading').css("display", "block");;
        $('#details').text('Username:   ' + sUser);
        $('#amtdetails').text('Amount:   ' + 'Rs ' + nAmt);
    });

});

