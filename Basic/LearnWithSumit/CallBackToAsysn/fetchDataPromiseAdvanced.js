function fetchAllProducts() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const products = [
                { id: 1, name: "Product A", price: 100, code: "A100" },
                { id: 2, name: "Product B", price: 200, code: "B200" },
                { id: 3, name: "Product C", price: 300, code: "C3001" }
              ];
              resolve(products);
        }, 2000);
    })
}

function fetchAllReviews(){
    return new Promise((resolve) => {
        setTimeout(() => {
          const reviews = [
            { code: "A100", review: "Great product A!" },
            { code: "B200", review: "Not bad B." },
            { code: "C300", review: "Excellent product C!" }
          ];
          resolve(reviews);
        }, 2000);
    });
}

function fetchData(productId) {
    console.log('inside featch data');
    return fetchAllProducts().then((products)=>{
        console.log('inside featch data 2');
        return new Promise((resolve,reject)=>{
            console.log('inside featch data3');
            setTimeout(() => {
                console.log('inside featch data 4');
                    const product = products.find(p => p.id === productId);
                    if (product) {
                        console.log("Match data is "+ product);
                        resolve(product.code)
                    }else{
                        reject('No Product id found');
                    }
                })
            }, 2000);
    })
}

function fetchReviewByCode(productCode){
    console.log('inside fetchReviewByCode ');
    return fetchAllReviews().then((reviews)=>{
        console.log('inside fetchReviewByCode 2');
        return new Promise((resolve,reject)=>{
            console.log('inside fetchReviewByCode 3');
            console.log("Product code is::"+productCode);
            setTimeout(() => {
                console.log('inside fetchReviewByCode 4');
                    const review = reviews.find( r => r.code === productCode);
                    if (review) {
                        resolve(review.review);
                    }else{
                        reject('No matching code found');
                    }
                })
            }, 3000);
    })
}

function successMessage(params) {
    console.log("Success !! "+ params);
}

function failMessage(error){
    console.log('Code failed for :: '+ error);
}

fetchData(1)
    .then(fetchReviewByCode)
    .then(successMessage)
    .catch(failMessage)