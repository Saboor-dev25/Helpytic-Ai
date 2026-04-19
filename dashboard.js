
let msg = document.getElementById("ash")
let current_user = JSON.parse(localStorage.getItem("users"))


let lastUser = current_user[current_user.length - 1];
console.log(lastUser)
msg.innerText =`Welcome back ${lastUser.user_name}`
