const UserLogin = () => {
    let userDetail = localStorage.getItem("userData");
    userDetail = JSON.parse(userDetail);
    
    document.getElementById('userName').innerHTML = userDetail.name;
    document.getElementById('balance').innerHTML = userDetail.accountBalance + "$";


}

UserLogin()