console.log('It Works');

$(document).ready(function() {
    $('.submit').click(function(event) {
        console.log('Clicked button');

        var name = $('.name').val();
        var email = $('.email').val();
        var subject = $('.subject').val();
        var message = $('.message').val();
        var statusElm = $('.status')
        statusElm.empty();

        if(name.length > 5 && name.includes('@') && name.includes('.')){
            statusElm.append('<div>Name is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Name is not valid</div>')
        }

        if(email.length > 5 && email.includes('@') && email.includes('.')){
            statusElm.append('<div>Emali is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Emali is not valid</div>')
        }

        if(subject.length >= 2){
            statusElm.append('<div>Subject is valid</div>')
        }else{
            event.preventDefault();
            statusElm.append('<div>Subject is not valid</div>')
        }

        if(message.length >= 10){
            statusElm.append('<div>message is valid</div>')
        }else{
            statusElm.append('<div>message is not valid</div>')
            event.preventDefault();
        }
    })
});