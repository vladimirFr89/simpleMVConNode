(function(){
    const errorBlockEl = $('#errorBlock');
    errorBlockEl.html('');

    $('#authForm').submit(function(event){
        event.preventDefault();
        console.log(event);
        const loginVal = $('#login').val();
        const pswVal = $('#password').val();

        $.ajax({
            method: 'post',
            url: '/auth/login',
            data: { login: loginVal, password: pswVal},
            dataType: 'text',
            error: function() {
                console.log(arguments);
            },

            success: function(data) {
                errorBlockEl.text(data);
            }
        })
        
    });
}());