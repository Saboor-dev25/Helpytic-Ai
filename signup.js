let query = document.getElementById('name')
let pwd = document.getElementById('password')
let email1 = document.getElementById('email')
let role1 = document.querySelector('select')
let sign_up_btn = document.getElementById('signup_btn')
let msg = document.getElementById("status")


let user_name = " ";
let password = "";
let  email = "";
let role = "";


let sign_up_function = () => {
    
    if (query.value === "" || email1.value === "" || role1.value === ""  || pwd.value === ""){
        msg.innerText = "Cannot leave the feild empty!!"
        return
    }

    

    let user = {
        user_name : query.value ,
        email : email1.value,
        role : role1.value,
        password : pwd.value,
    }

    

    
    // it Will get the existing list from storage. 
    // If it's the first time (null), it defaults to an empty array [].
    let allUsers = JSON.parse(localStorage.getItem("users")) || [];
    allUsers.push(user)

    // it will Save the entire updated list back to local storage
    localStorage.setItem("users", JSON.stringify(allUsers));
    
    console.log(user)
    
    if (role1.value.toLowerCase() === "helper" ) {
        window.location.href = "dashboard.html"
    }

    else{
        window.location.href = "explore.html"
    }
    
    
    query.value = ""
    pwd.value = ""
    email1.value = ""
    role1.value = ""
    
    //window.location.href = "login.html";
}

sign_up_btn.addEventListener('click', sign_up_function)
