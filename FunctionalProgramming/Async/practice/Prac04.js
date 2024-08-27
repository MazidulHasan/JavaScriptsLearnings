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

async function sequentailCall() {
    try {
        let firstDataCall = await fetchData1();
        console.log(firstDataCall);

        let secondDataCall = await fetchData2();
        console.log(secondDataCall);

        let thirdDataCall = await fetchData3();
        console.log(thirdDataCall);
    } catch (error) {
        console.log(error);
    }
}

sequentailCall();