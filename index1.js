let otp_val; // Declare otp_val in a scope that will retain its value

function sendOTP() {
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];

    // Generating random number as OTP;
    otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `
        <h1>Please Subscribe to Ash_is_Coding</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken: "3d13a1c2-4806-4a75-aa0d-f2901820f4ac",
        To: email.value,
        From: "amit8607223516@gmail.com",
        Subject: "its amit hlo",
        Body: emailbody
    }).then(
        // if success it returns "OK";
        message => {
            if (message === "OK") {
                alert("OTP sent to your email " + email.value);

                // now making otp input visible
                otpverify.style.display = "block";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp-btn');

                otp_btn.addEventListener('click', verifyOTP); // Attach the event listener to verify the OTP
            } else {
                alert("Error sending email: " + message);
            }
        }
    ).catch(error => {
        alert("Failed to send email: " + error);
    });
}

function verifyOTP() {
    const otp_inp = document.getElementById('otp_inp');

    // Check whether the entered OTP matches the sent OTP
    if (otp_inp.value == otp_val) {
        alert("Email address verified...");
        // Redirect to the welcome page after successful verification
        window.location.href = "welcome.html";
    } else {
        alert("Invalid OTP");
    }
}
