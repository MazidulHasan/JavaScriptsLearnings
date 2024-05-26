const url = 'https://cat-fact.herokuapp.com/facts';

const getCatDatas = async()=>{
    let response = await fetch(url);
    let jsonData = await response.json();
    console.log(jsonData[0].text);
};

getCatDatas();