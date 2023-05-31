class User{
    constructor(email,name){
        this.name = name;
        this.email = email;
        this.score = 0;
    }

    login(){
        console.log(this.email, " Just log in");
    }
    logout(){
        console.log(this.email, " Just log out");
    }

    updateScore(){
        this.score++;
        console.log(this.email, " Is now at ",this.score);
    }
}

class Admin extends User{
    deleteUser(user){
        users = users.filter( u =>{
            return u.email != user.email
        })
    }
}

var user1 = new User("email1", "Name1");
var user2 = new User("email2", "Name2");

var admin = new Admin("admin1", "AdminName1");
var users = [user1,user2,admin];
admin.deleteUser(user1);
console.log(users);