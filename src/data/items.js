const productList = [
    {
        id:'1',
        title: 'product',
        price:99,
        image:'/images/product.jpg' 
    },
    {
        id:'2',
        title: 'product',
        price:99,
        image:'/images/product.jpg' 
    },
    {
        id:'3',
        title: 'product',
        price:99,
        image:'/images/product.jpg' 
    },
    {
        id:'4',
        title: 'product',
        price:99,
        image:'/images/product.jpg' 
    },
]

// هدف از این تابع این هست بتونیم این تابع را ب رای یک محصول خاص فراخوانی بکنیم
function getProductData(id){
  let productDate = productList.find((item )=>item.id === id)
  return productDate;
}

export {productList, getProductData}