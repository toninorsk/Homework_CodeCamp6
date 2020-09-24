// let user = {
//     name: 'Bobby',
//     password: 'bbb',
//     age: 25,
//     connected: false,
//     login: function () {
//         this.connected = true;
//         console.log('your status', this.connected)
//     }
// }

// console.log(user.name)
// console.log(user.age)
// console.log(user.connected)
// user.login()
// console.log(user.connected)

class UserTemplate {

    constructor(name, password, age) {
        this.name = name
        this.password = password
        this.age = age
        this.connected = false
    }

    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }
}

user1 = new UserTemplate('Andy','aaa',25)
user2 = new UserTemplate('Boby','bbb',35)

console.log(user1.name)
console.log(user1.age)
console.log(user1.connected)
user.login()
console.log(user1.connected)

console.log(user2.name)
console.log(user2.age)
console.log(user2.connected)
user.login()
console.log(user2.connected)
