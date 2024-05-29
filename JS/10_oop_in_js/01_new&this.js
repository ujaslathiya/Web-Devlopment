const user = {
    'username' : 'Ujas Lathiya',
    'age' : '19',
    'loginId' : '_ujas_lathiya'
}

function createUser(username,age,loginId) {
    
    this.username = username;
    this.age = age;
    this.loginId = loginId
    
}

const user1 = new createUser('hardik',24,'hardik1323'); // new create new context
const user2 = new createUser('ujas',19,'ujas_123');

console.log(user1);