/*************************   THIS WILL SHOW THE SIGN In SCREEN IF THE USER CLICKED ON THE profile icon   ***********************************/
// var icon_profile=document.querySelector(".fa-solid.fa-user");

// function fillSignIn(){

//     var data=`
//         <h1>LogIn</h1>

//         <form>
//             <label for="EMAIL">Email:</label>
//             <input type="email" name="email" id=""EMAIL required placeholder="Enter email:" required><br>
            
//             <label for="pass">Password</label>
//             <input type="password" id="pass" placeholder="Enter password:" required ><br><br>

//             <input type="submit" value=login >
//             <a id="signup" href="../HTML/Register.html">Sign up</a>
//         </form>
//         `;

//         document.querySelector("main").innerHTML =data;       

// }

// icon_profile.onclick=fillSignIn();

/*************************   THIS WILL SHOW THE SIGN UP SCREEN IF THE USER CLICKED ON THE Sign Up label  ***********************************/

// var sign_up=document.querySelector("#signup");

// function fillSignUp(){

//     var signUpData=`
//         <form method="post">
//             <label for="username">Username:</label>
//             <input type="text" id="username" name="username" required placeholder="Enter username" >
//             <br>

//             <label for="email">Email:</label>
//             <input type="email" id="username" name="email" required placeholder="Enter your Email">
//             <br>

//             <label for="AGE">Age:</label>
//             <input type="number" min="15" max="80" step="1" name="age" id="AGE" placeholder="Age" required>
//             <br>

//             <label for="password">Password:</label>
//             <input type="password" id="password" placeholder="Enter password" required>
//             <br>

//             <label>Gender:</label>
//             <input type="radio" name="gender" value="male" required><label>Male</label>
//             <input type="radio" name="gender" value="female" required><label>Female</label>
//             <br><br>

//             <input type="submit" value="register">
//         </form>
//         `;

//         document.querySelector("main").innerHTML =signUpData; 
// }

// sign_up.onclick=fillSignUp();

const getLoginInfo = async function() {
    try {
        const response = await axios.get('https://dummyjson.com/users');
        console.log(response.data.users);
        return response.data.users;
    } catch (error) {
        console.error('Error:', error);
    }
};

const getLogedInAccount = async function() {
    const users = await getLoginInfo();
    const par=new URLSearchParams(window.location.search);
    console.log(users[0].id,par.get('id'));
    for(let i=0;i<users.length;i++){
        if(users[i].id== par.get('id')){
            console.log(users[i]);
            return users[i];
        }
        else{
            console.log("User not found");
            return null;
        }
    }

    return logedInUser;
}

const displayUserData = async function(){
    const user = await getLogedInAccount();
    if(user){
        const data=`
        <h1>User Information</h1>
        <p>Username: ${user.username}</p>
        <p>Phone: ${user.phone}</p>
        <img src="${user.image}" alt="User Image">
        `;
        document.querySelector("main").innerHTML = data;
    }
}
displayUserData();