
// login form 
function userLogin() {

    let emailAddress =  document.getElementById("user_email").value;
    let data = JSON.stringify({
        "email": emailAddress
    });

    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        redirect: 'follow'
    };

    fetch("/user/auth/otp", requestOptions)
    .then(response => response.text())
    .then(result => {
        // hide sign up 
        document.getElementById("current_user_email").value = emailAddress;
        document.getElementById("user-login-signup").style.display = "none";
        document.getElementById("OtpForm").style.display = "block";
    })
    .catch(error => console.log('error', error));
    return false;
}

// Verify OTP
function loginOtp(){

    let emailAddress =  document.getElementById("current_user_email").value;
    let otp          =  document.getElementById("otp").value;
    
    var data = JSON.stringify({
        "email": emailAddress,
        "otp": otp,
    });

    var requestOptions = {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: data,
        redirect: 'follow'
    };

    fetch("/user/auth/login", requestOptions)
    .then(response => response.text())
    .then(result => {
        // hide sign up 
        let response = JSON.parse(result);
        console.log(typeof(response));
        if(response.status == "success"){
            console.log(response.status);
            window.location.href = "/dashboard";
        } else {
            alert("OTP not valid");
        }
    })
    .catch(error => console.log('error', error));
    return false;
}
