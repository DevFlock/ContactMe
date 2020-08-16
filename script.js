const emailname = config.EMAIL
const password = config.PASS

function sendEmail() {
    showdiv()
    var contact = document.getElementById("contactinfo").value;
    var subjecttitle = document.getElementById("subject").value;
    var inbodytext = document.getElementById("inbody").value;
    var body = inbodytext + "<br><br><br>Contact info:" + contact;
    Email.send({
        Host: "smtp.gmail.com",
        Username : emailname,
        Password : password,
        To : emailname,
        From : emailname,
        Subject : subjecttitle,
        Body : body,
    })
    .then(success());
}

function success() {
    document.getElementById("status").innerHTML = "Email has been sent!";
    showdiv()
    document.getElementById("title").innerHTML = document.getElementById("subject").value;
    document.getElementById("body").innerHTML = document.getElementById("inbody").value;
}

function showdiv() {
    var x = document.getElementById("output");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function disableb() {
    document.getElementById("button").disabled = true;
}
