function sendEmail() {
    Email.send({
        Host : "smtp.gmail.com",
        Username : "xxseoralee@gmail.com",
        Password : "ZZalth3053!",
        To : 'xxseoralee@gmail.com',
        From : document.getElementById("email").value,
        Subject : "New contact Form Enquiry",
        Body : "And this is the body"
        }).then(
        message => alert(message)
       ); 
}