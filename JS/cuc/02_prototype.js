function func_1(params) {
    
    console.log("this is function");

}

const st = "ujas lathiya    ";

const arr = ['hulk','thor','ironman']

// method injucted in object can access by function string and array
Object.prototype.Custom_method = function () {
    console.log("This is method added to object");
}

func_1.Custom_method();

st.Custom_method();

arr.Custom_method();

// method added to array or function or string can only acces by that peeticular....

Array.prototype.array_method = function () {
    console.log("Method of Array");
}


arr.array_method();

String.prototype.st_method = function(){
    console.log("String special method");
}

st.st_method();

const user = {
    'username' : 'ujaslathiya',
    'age' : 19
}

const Teacher = {
    'name' : 'cuc',
    'sub' : 'js'
}

const Techer_profile = {
    'age' : 30,
    'experience(years)' : 3,
    // one of the way to inherite proerties
    __proto__:Teacher
}

Teacher.__proto__ = user

// modern syntax

Object.setPrototypeOf(Techer_profile,Teacher);

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length of string is : ${this.trim().length}`);
}

st.trueLength();
"js     ".trueLength();
"   cu c   ".trueLength();

