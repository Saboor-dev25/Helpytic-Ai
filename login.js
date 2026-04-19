let login_btn = document.getElementById('login_btn')
let login_query = document.getElementById('login_name')
let login_pwd = document.getElementById('login_password')
let msg = document.getElementById('status')

let login = () => {

    allUsers = JSON.parse((localStorage.getItem("users")))
    console.log(allUsers)
}

login_btn.addEventListener('click' , login)
