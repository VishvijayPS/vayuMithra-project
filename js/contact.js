function emailSend(){

    var username = document.getElementById('fname').value +" "+ document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;

    var send_content = 
        "Name: "+ username +".<br />" +
        "Email: "+ email +".<br />" +
        "Message: "+ message +".<br />";

    Email.send({
        Host : "smtp.gmail.com",
        Username : "vishvijayps227@gmail.com",
        Password : "7EDAAD9E3022DAABDE016011FF351CD8647A",
        To : 'vishvijayps123@gmail.com',
        From : "vishvijayps227@gmail.com",
        Subject : subject,
        Body : send_content
    }).then(
      message => alert(message)
    );
}