let product = {
    productId: "10-666898",
    costPrice: 2750,
    profitPercentage: 15,
    sellingPrice: 0
}

/*
function calculateSellingPrice(product){
    let sellingPrice = product.costPrice + (product.profitPercentage / 100 * product.costPrice);
    product.sellingPrice = sellingPrice;
}
*/

const calculateSellingPrice = (product) => {
    let sellingPrice = product.costPrice + (product.profitPercentage / 100 * product.costPrice);
    product.sellingPrice = sellingPrice;
}


calculateSellingPrice(product);

console.log(product);