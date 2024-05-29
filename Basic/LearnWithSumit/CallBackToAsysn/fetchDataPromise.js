function fetchProductDetails(productId) {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            const product = {
                id: productId, 
                name: "Product Name",
                price: 100 
            }
            resolve(product);
        }, 2000);
    })
}

fetchProductDetails(2)