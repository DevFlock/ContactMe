function sendEmail() {
    showdiv()
    var subjecttitle = document.getElementById("subject").value;
    var inbodytext = document.getElementById("inbody").value;
    Email.send({
        Host: "smtp.gmail.com",
        Username : EMAIL,
        Password : PASSWORD,
        To : EMAIL,
        From : EMAIL,
        Subject : subjecttitle,
        Body : inbodytext,
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
