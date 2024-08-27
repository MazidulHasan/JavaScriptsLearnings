async function getDataFromAPI() {
    try {
        let data = await fetch("https://jsonplaceholder.typicode.com/posts");
        return await data.json();   
    } catch (error) {
        console.log('Got error', error);
        
    }
}

const dataN = await getDataFromAPI();
console.log(dataN);
