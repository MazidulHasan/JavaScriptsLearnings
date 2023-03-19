var counter = document.querySelector(".counter");
var followers = document.querySelector('.followers');

let count = 1;
setInterval(() => {
    if(count < 1000){
        count++;
        counter.innerText = count
    }
},2);

setTimeout(() =>{
    followers.innerText = "Followers on Insta"
},4000)