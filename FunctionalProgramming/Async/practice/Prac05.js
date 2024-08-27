async function fetchData1() {
    const firstData = await fetch("https://reqres.in/api/users/2");
    return await firstData.json();
}

async function fetchData2() {
    const secondData = await fetch("https://reqres.in/api/users/3");
    return await secondData.json();
}

async function fetchData3() {
    const thirdData = await fetch("https://reqres.in/api/users/4");
    return await thirdData.json();
}

async function parallelCall() {
    try {
        let [data1,data2,data3] = await Promise.all([
            fetchData1(),fetchData2(),fetchData3()
        ])
        console.log(data1);
        console.log(data2);
        console.log(data3);
    } catch (error) {
        console.log(error);
    }
}

parallelCall();