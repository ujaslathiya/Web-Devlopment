function User(email,password){

    this._email = email;
    this._password = password;

    Object.defineProperty(this, 'email', {
        get : function () {
            return this._email.toUpperCase();
        },
        set : function(value){
            this._email = value;
        }
    })

    Object.defineProperty(this, 'password', {
        get : function () {
            return `${this._password.toUpperCase()}abs`;
        },
        set : function (value) {
            this._password = value;
        }
    })
    
}

const user_1 = new User('ujas@gmail.com',"ujas@123");

console.log(user_1.email);
console.log(user_1.password);