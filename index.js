'use strict'

class User {

    #login;
    #_password;

    constructor(login, password) {
        this.#login = login;
        this.#password = password;
    }

    set #password(password) {
        this.#_password = password.split('').reverse().join('');
    }

    get #password() {
        return  this.#_password.split('').reverse().join('');
    }

    get login() {
        return this.#login;
    }

    checkPassword(pass) {
        return this.#password === pass;
    }

    changePassword(oldPass, newPass) {
        if(this.checkPassword(oldPass)) {
            this.#password = newPass
            console.log('Пароль изменён')
        } else {
            console.log('Пароль не верный')
        }
    }
}

const artem = new User('Artem', '12345678');
artem.changePassword('12345678', 'asdf')
console.log(artem)