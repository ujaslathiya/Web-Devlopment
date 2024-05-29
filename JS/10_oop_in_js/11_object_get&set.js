const user = {
    _email : "ujas@gmail.com",
    _password : 'ujas@!23',

    get email() {
        return this._email.toUpperCase();
    },
    set email(value) {
        this._email = value;
    },

    get password() {
        return `pqr${this._password.toUpperCase()}abc`;
    },

    set password(value) {
        this._password = value;
    }
}

const ujas = Object.create(user);
console.log(ujas.email);