const getLoginInfo = async function() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        console.log(response.data.users);
        return response.data.users;
    } catch (error) {
        console.error('Error:', error);
    }
};

/*..................................................This function to validate the login form.................................*/
const activeLoginButton = async function(event) {
    event.preventDefault(); // Prevent form submission

    const emailField = document.querySelector('#EMAIL');
    const passwordField = document.querySelector("#pass");
    const loginInfo = await getLoginInfo();
    console.log(loginInfo);

    let loged_in_user;
    let found = false;
    for (let i = 0; i < loginInfo.length; i++) {
        // trim() removes the spaces before the string and after it
        // compare the entered email and password with the stored ones in the loginInfo array
        if (emailField.value.trim() === loginInfo[i].email && passwordField.value.trim() === loginInfo[i].password) {
            loged_in_user = loginInfo[i];
            found = true;
            break;
        }
    }

    console.log(found);
    if (found) {
        alert("Login Successful");

        window.location.href=`profile.html?id=${loged_in_user.id}&username='${loged_in_user.firstName}+" "+${loged_in_user.lastName}'&image=${loged_in_user.image}&phone=${loged_in_user.phone}`;
    } else {
        alert("Invalid Email or Password");
    }

    emailField.value = "";
    passwordField.value = "";
}


document.querySelector('#submit_login').onclick = activeLoginButton;
