//Start Form

const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector("#message");
const submitBtn = document.querySelector("#submitBtn");

//Name Field Validation
// Run on Input in Name Field 
function name_fun() {
    let name_msg = document.querySelector(".name");
    let regexp_name = /^[a-z \ A-Z]{3,20}$/;
    if (regexp_name.test(name.value.trim())) {
        name_msg.innerHTML = "";
        name.classList.remove("is-invalid");
        name_msg.classList.remove("invalid-feedback");
        name.classList.add("is-valid");
    } else {
        name_msg.innerHTML = "Please Enter Your Valid Name";
        name.classList.remove("is-valid");
        name.classList.add("is-invalid");
        name_msg.classList.add("invalid-feedback");
    }
};


//Email Field Validation
// Run on Input in Email Field 
function email_fun() {
    let email_msg = document.querySelector(".email");
    let regexp_email = /^[a-zA-Z_\.\-]([0-9a-zA-Z_\.\-]){1,30}@([a-zA-Z]){3,10}\.([a-zA-Z]){2,4}$/;
    if (regexp_email.test(email.value.trim())) {
        email_msg.innerHTML = "";
        email.classList.remove("is-invalid");
        email.classList.add("is-valid");
        email_msg.classList.remove("invalid-feedback");
    } else {
        email_msg.innerHTML = "Enter Your Valied Email";
        email.classList.remove("is-valid");
        email.classList.add("is-invalid");
        email_msg.classList.add("invalid-feedback");
    }
};



//Password Field Validation
// Run on Input in Password Field 
function password_fun() {
    let password_msg = document.querySelector(".password");
    if ((password.value.trim().length >= 8) && (password.value.trim().length <= 15)) {
        password_msg.innerHTML = "";
        password.classList.remove("is-invalid");
        password.classList.add("is-valid");
        password_msg.classList.remove("invalid-feedback");
    } else {
        password_msg.innerHTML = "Password Must be 8 to 15 Character";
        password.classList.remove("is-valid");
        password.classList.add("is-invalid");
        password_msg.classList.add("invalid-feedback");
    }
};
//Password Show And Hide
// Run on Click in checkbox Field(Show Password) 
function show_pass() {
    const password = document.querySelector('#password');
    if (show_password.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }
}

// Run on Click on Submit Button
submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if ((email.value != "") && (name.value != "") && (message.value != "") && (password.value != "")) {
        if ((email.classList[1] == "is-valid") && (name.classList[1] == "is-valid") && (password.classList[1] == "is-valid")) {
            document.getElementById("alert").classList.add("show");
            document.getElementById("alert").classList.add("alert-success");
            document.getElementById("alert").classList.remove("alert-danger");
            document.getElementById("alert").innerHTML = "Message Send Successfully";
        } else {
            document.getElementById("alert").classList.add("show");
            document.getElementById("alert").classList.remove("alert-success");
            document.getElementById("alert").classList.add("alert-danger");
            document.getElementById("alert").innerHTML = "Your Information Is Not Valid.";
        }
    } else {
        document.getElementById("alert").classList.add("show");
        document.getElementById("alert").classList.remove("alert-success");
        document.getElementById("alert").classList.add("alert-danger");
        document.getElementById("alert").innerHTML = "Please Fill All The Fields.";

    }

}) 