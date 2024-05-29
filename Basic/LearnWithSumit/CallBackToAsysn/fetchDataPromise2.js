function fetchProductData(productId) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const product = {
          id: productId,
          name: "Product Name",
          price: 100
        };
        resolve(product);
      }, 2000);
    });
  }
  
  function fetchReviews(productId) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const reviews = [
          { id: 1, productId: productId, review: "Great product!" },
          { id: 2, productId: productId, review: "Not bad." }
        ];
        resolve(reviews);
      }, 2000);
    });
  }
  
  // Now chaining the promises together
  fetchProductData(1).then((product) => {
    console.log("Product Details:", product);
    return fetchReviews(product.id);
  }).then((reviews) => {
    console.log("Product Reviews:", reviews);
  }).catch((error) => {
    console.error("An error occurred:", error);
  });
  