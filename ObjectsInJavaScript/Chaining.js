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

var user1 = new User("email1", "Name1");
var user2 = new User("email2", "Name2");

user1.login().updateScore().updateScore().logout();