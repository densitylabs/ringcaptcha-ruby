$(function() {
    $('#btnSubmit').click(function() {
        var pinCode = $("input[name='ringcaptcha_pin_code']").first().val();
        var sessionId = $("input[name='ringcaptcha_session_id']").first().val();
        if (pinCode.length == 0) {
            console.log("Please enter pin code");
        } else if (pinCode.length < 4) {
            console.log("Please enter 4 digit pin code");
        } else {
            $.ajax({
                type: 'post',
                url: '/homes/valid_rc',
                data: 'param1=' + pinCode + '&params2=' + sessionId,
                success: function(data) {
                  console.log(data);
                }
            });
        }
    });
});
