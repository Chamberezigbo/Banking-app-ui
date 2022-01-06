
// fetch Api //

const baseUrl = "https://banking-app-api.herokuapp.com/";

async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        cache: "no-cache",
        headers: {
            "content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
    return response.json();
}

const signUp = () => {
    let userEmail = document.getElementById("email").value;
    let userFirstName = document.getElementById("fName").value;
    let userLastName = document.getElementById("lName").value;
    let userPass = document.getElementById("password").value;
    let userConfirm = document.getElementById("con-password").value;

    if (userPass !== userConfirm) {
        let element = document.getElementById("errorDiv");
        element.classList.remove("d-none");
        document.getElementById("errorSpan").innerHTML = 'Password does not match'; //add a more clear massage //
        setTimeout(() => {
            element.classList.add("d-none");
        }, 6000);
        return
    }

    const userData = {
        firstName: userFirstName,
        lastName: userLastName,
        email: userEmail,
        password: userPass,
    };

    postData(baseUrl + "users", userData).then((data) => {
        console.log(data);
        if (data.success) {
            const fullName = `${data.responseMessage.firstName} ${data.responseMessage.lastName}`;
            const accountBalance = `${data.responseMessage.accountBalance}`;
            const token = `${data.token}`;
            const userData = {
                fullName,
                token,
            };
            localStorage.setItem("userData", JSON.stringify(userData));
            window.location = "dashboard.html";
        } else {
            let error = data.responseMessage;
            let element = document.getElementById("errorDiv");
            element.classList.remove("d-none");
            document.getElementById("errorSpan").innerHTML = error; //add a more clear massage //
            setTimeout(() => {
                element.classList.add("d-none");
            }, 6000);
        }
    });
};



// login //

const loginUser = () => {
    let email = document.getElementById("email").value;
    let password = document.getElementById("pass").value;

    let userDate = {
        email,
        password,
    };

    postData(baseUrl + "login", userDate).then((data) => {

        if (data.success) {
            const name = `${data.responseMessage.firstName}`;
            const accountBalance = `${data.responseMessage.accountBalance}`;
            const token = `${data.token}`;

            const userData = {
                name,
                accountBalance,
                token,
            };
            console.log(data);

            localStorage.setItem("userData", JSON.stringify(userData));
            window.location = "dashboard.html";
        } else {
            let error = data.responseMessage;
            let element = document.getElementById("errorDiv");
            element.classList.remove("d-none");
            document.getElementById("errorSpan").innerHTML = error; //add a more clear massage //
            setTimeout(() => {
                element.classList.add("d-none");
            }, 6000);
        }
    });


};
