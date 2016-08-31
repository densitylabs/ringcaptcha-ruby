$(function() {
    $('#btnSubmit').click(function() {
        var pinCode = $("input[name='ringcaptcha_pin_code']").first().val();
        var sessionId = $("input[name='ringcaptcha_session_id']").first().val();
        $.ajax({
          type: 'post',
          url: '/homes/valid_rc',
          data: 'param1=' + pinCode + '&params2=' + sessionId,
          success: function(data) {
            console.log(data);
            $('#result').html(data.toString())
          }
        });
    });
});
