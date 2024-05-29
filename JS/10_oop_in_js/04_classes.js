// ES6 

class User{

    constructor(username,email,password){
        this.username = username;
        this.email = email;
        this.password = password;
    }

    encryptPassword(){
        return `pqr${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const user_1 = new User("ujas","ujas@gmail.com","ujas@123");

console.log(user_1);
console.log(user_1.encryptPassword());
console.log(user_1.changeUsername());



