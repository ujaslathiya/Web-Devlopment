class User{
    constructor(username){
        this.username = username;
    }

    logme(){
        console.log(`Username is ${this.username}`);
    }
}

class Teacher extends User{

    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password; 
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const Teacher_1 = new Teacher('ujas','ujas@gmail.com','ujas@!23');
console.log(Teacher_1);

const user_1 = new User('ujas lathiya');

user_1.logme();

Teacher_1.logme();  

console.log(Teacher_1 instanceof Teacher);
console.log(Teacher_1 instanceof User);
console.log(user_1 instanceof Teacher);
