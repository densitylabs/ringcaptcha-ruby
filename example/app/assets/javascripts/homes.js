$(function() {
    $('#btnSubmit').click(function() {
        var val2 = $("#ringcaptcha_pin_code").val();
        if (val2.length == 0) {
            alert("Please enter pin code");
        } else if (val2.length < 4) {
            alert("Please enter 4 digit pin code");

        } else {
            $.ajax({
                type: 'post',
                url: '/homes/valid_rc',
                data: 'param1=' + $("#ringcaptcha_pin_code").val() + '&params2=' + $("#ringcaptcha_session_id").val(),
                success: function(data) {}
            });
        }
    });
});
