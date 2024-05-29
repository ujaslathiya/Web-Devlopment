function setUsername(username) {
    this.username = username;
}

function User(username,email,password) {
    
    setUsername.call(this,username); // this will hold execution context of setUsername function By using this of USer insted of setUSername
    this.email = email;
    this.password = password;
}

const ujas = new User("ujas","ujas@gmail.com", "ujas@123");

console.log(ujas);