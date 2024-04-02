const form = document.querySelector("form")
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message")

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone: ${phone.value}<br> Subject: ${subject.value}<br> Message: ${mess.value}<br>`;
    Email.send({
        SecureToken: "c693264b-d174-4531-afcc-8c3f1aee6e36",
        To : 'daisymachiri1999@gmail.com',
        From : "daisymachiri1999@gmail.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK"){
            Swal.fire({
                title: "Success!",
                text: "Message sent successfully!",
                icon: "success"
              });
        }
      }
    );
}
function checkInputs() {
    const items = document.querySelectorAll(".item")
    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }
        if (items[1].value != ""){
            checkEmail();
        }
        items[1].addEventListener("keyup", () =>{
            checkEmail();
        })
        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.classList.remove("error");
            item.parentElement.classList.remove("error");
            }
            else {
                item.classList.add("error");
            item.parentElement.classList.add("error");
            }
        })
    }
}
function checkEmail() {
    const emailRegex = /^([a-z\d.-]+)@([a-z\d.-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");
    }
}
form.addEventListener("submit", (e) => {
    e.preventDefault();
    checkInputs();
    
    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error") ){
        sendEmail();

        form.reset();
        return false;
    }
})