function getWeather() {
    return new Promise((resolve, rejcet)=>{
        console.log('Getting weather type');
        setTimeout(() => {
            resolve('sunny');
        }, 2000);
    });
}

function getWeatherIcon(weatherType) {
    return new Promise((resolve,reject)=>{
        console.log('Printing wether');
        setTimeout(() => {
            switch (weatherType) {
                case 'sunny':
                    resolve('☀️')
                    break;
                case 'cloudy':
                    resolve('⛅')
                    break;
                case 'rainy':
                    resolve('☔')
                    break;
                default:
                    reject('No record found')
                    break;
            }
        }, 2000);
    })
}

function successMessage(data) {
    console.log(`Success ${data}`);
}

function errorMessage(error) {
    console.log(`Error ${error}`);
}

async function printWeatherData() {
    try {
        let data = await getWeather();
        let result  = await getWeatherIcon(data);
        successMessage(result);    
    } catch (error) {
        errorMessage(error);
    }
    
}

printWeatherData();