const paymentSuccess = true;
const marks = 70;

function enrollemnt(callback) {
    console.log('Course enrollment in progress');
    setTimeout(() => {
        if (paymentSuccess) {
            callback();
        }
        else{
            console.log('Payment is not successfull');
        }
    }, 2000);
}

function progress(callback) {
    console.log('Course progress in progress');
    setTimeout(() => {
        if (marks>80) {
            callback();
        }
        else{
            console.log('Marks is less than 80. Not eligible');
        }
    }, 3000);
}

function getCertificate() {
    console.log('Certificate got!!');
}

enrollemnt(()=>{
    progress(()=>{
        getCertificate()
    })
})

enrollemnt(progress(getCertificate())) //this will not work asd we are 
// invoking the functions immediately