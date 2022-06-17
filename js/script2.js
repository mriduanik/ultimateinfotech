function sendMail(){
    var parms = {
        from_name : document.getElementById("toname").value,
        email_id : document.getElementById("toemail").value,
        message : document.getElementById("message").value,
        
    };
    emailjs.send('service_av3swaf', 'template_df7ig7y', parms)
    .then(function(response) {
       alert('Thanks for contact with us!', response.status,);
    }, function(error) {
       alert('FAILED...', error);
    });
    
}