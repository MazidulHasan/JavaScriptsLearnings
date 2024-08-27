async function myAsyncFunction() {
    let success = true;
    if (success) {
        return "The data is success";
    }else{
        return "The data failed";
    }
}

myAsyncFunction()
    .then((message)=>{
        console.log("Inside .then");
        console.log(message);
    })

    // No need to add .catch as .then handels both success and fail data
    // .catch((message)=>{
    //     console.log("Inside .catch");
    //     console.log(message);
    // })