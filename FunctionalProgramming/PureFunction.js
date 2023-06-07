//Which gives same output for same input each time
function add(x,y){
    return x+y;
}

//impure function
function add(x,y){
    console.log(x+y); //for this external and observable side effect it is impure function
    return x+y;
}