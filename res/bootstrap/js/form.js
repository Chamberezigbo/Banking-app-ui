function contactForm() {
    var name = document.forms["glovikForm"] ["Name"];
    var email = document.forms["glovikForm"] ["Email"];
    var subject = document.forms["glovikForm"] ["Subject"];
    var checkMail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


    if (name.value == "") {
        window.alert("Please enter your name");
        name.focus();
        return false;
    }

    if (email.value == ''){
        window.alert("Please enter a valid email address");
        email.focus();
        return false
    }
    
    if (subject.value == "") {
        window.alert("Please enter a valid subject");
        name.focus();
        return false;
    }

    // if (message.value == "") {
    //     window.alert("Please enter a valid message");
    //     message.focus();
    //     return false;
    // }

    return true
}

function clear(){
     document.getElementById('formName').value=''; 
     document.getElementById('formEmail').value=''; 
     document.getElementById('formSelect').value=''; 
     document.getElementById('formMessage').value=''; 
}