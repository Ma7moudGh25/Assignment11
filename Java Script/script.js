let sign = document.getElementById("sign");

const show = () => {
    // قراءة القيم من الحقول
    let userName = document.getElementById("user_name").value;
    let userEmail = document.getElementById("user_email").value;
    let userPassword = document.getElementById("user_pass").value;

    if (!userName || !userEmail || !userPassword) {
        alert("Enter all fields");
        return;
    }

    let user = {
        userName,
        userEmail,
        userPassword,
    };

    let usersArray = JSON.parse(localStorage.getItem("users")) || [];

    usersArray.push(user);

    localStorage.setItem("users", JSON.stringify(usersArray));

alert("data saved");
    console.log("المصفوفة المحدثة:", usersArray);
};


// sign.addEventListener("click", show);



let loginbtn= document.getElementById("loginbtn");

function login() {
    let email = document.getElementById("user_email").value;
    let password = document.getElementById("user_pass").value;
    let usersArray = JSON.parse(localStorage.getItem("users")) || [];
    let userFound = usersArray.find((user) => user.userEmail === email && user.userPassword === password);
    if (userFound) {
        alert("Login successful");
        window.location.href = "index2.html";
    } else {
        alert("Invalid email or password");
    }
    localStorage.setItem("user", JSON.stringify(userFound.userName));

}

loginbtn.addEventListener("click", login);