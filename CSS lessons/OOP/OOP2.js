let user = {
    name : '',
    password : '',
    age : 0,
    date : 000000,
    connected : true,
    login : function() {
     this.connected = true;
     console.log('your status', this.connected)
     this.connected = false;
     console.log('your status', this.connected)
    }
}

class UserTemplate {

    constructor(name, password, age, date, connected) {
        this.name = name
        this.password = password
        this.age = age
        this.date = date
        this.connected = connected
    }

    login() {
        this.connected = true
        console.log('your login status :', this.connected)
    }

    logout() {
        this.connected = false
        console.log('your login status :', this.connected)
    }

}

user1 = new UserTemplate('Andy', 'aaa', 25, 181093, true)
user2 = new UserTemplate('Boby', 'bbb', 35, 051211, false)

console.log(user1.name)
console.log(user1.age)
console.log(user1.date)
console.log(user1.connected)
user.login()
console.log(user1.connected)

console.log(user2.name)
console.log(user2.age)
console.log(user2.date)
console.log(user2.connected)
user.login()
console.log(user2.connected)

