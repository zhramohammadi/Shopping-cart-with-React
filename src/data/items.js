const productList = [
    {
        id:'1',
        title: 'headset',
        price:59,
        image:'/images/headset.jpg' 
    },
    {
        id:'2',
        title: 'headset',
        price:73,
        image:'/images/headset2.jpg' 
    },
    {
        id:'3',
        title: 'ipad',
        price:4500,
        image:'/images/ipad1.jpg' 
    },
    {
        id:'4',
        title: 'ipad',
        price:4000,
        image:'/images/ipad2.jpg' 
    },
    {
        id:'5',
        title: 'Xiaomi',
        price:1000,
        image:'/images/Xiaomi.jpg' 
    },
    {
        id:'6',
        title: 'iphon',
        price:3000,
        image:'/images/iphon.jpg' 
    },
    {
        id:'7',
        title: 'mac',
        price:5000,
        image:'/images/mac.png' 
    },
    {
        id:'8',
        title: 'samsung',
        price:2500,
        image:'/images/samsung.webp' 
    },
]

// هدف از این تابع این هست بتونیم این تابع را ب رای یک محصول خاص فراخوانی بکنیم
function getProductData(id){
  let productDate = productList.find((item )=>item.id === id)
  return productDate;
}

export {productList, getProductData}