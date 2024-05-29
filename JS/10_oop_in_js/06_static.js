class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username : ${this.username}`);
    }

     static createId(){
        return '123';
    }
}

const user = new User('ujas');

console.log(user.createId());