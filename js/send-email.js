/*
 * Copyright (c) 2019
 * Erick Ogaro
 */

function sendMail() {
    // mail-to address (recipient)
    let myemailaddress = "erickogaro1998@gmail.com";

    // mail-from details (sender)
    let fullname = document.forms["email-form"]["fullname"].value;
    let emailaddress = document.forms["email-form"]["emailaddress"].value;
    let subject = document.forms["email-form"]["subject"].value;
    let message = document.forms["email-form"]["message"].value;

    //  fetch details from form and send email
    if (message !== "") { // provisional
        alert("Email successfully sent to " + myemailaddress + ". Thank you for keeping in touch!");
    }
}