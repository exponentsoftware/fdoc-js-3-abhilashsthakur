const product = [
    {
        _id: 'eedfcf',
        name: 'mobile phone',
        description: 'Huawei Honor',
        price: 200,
        ratings: [
            { userId: 'fg12cy', rate: 5 },
            { userId: 'zwf8md', rate: 4.5 }
        ],
        likes: []
    },
    {
        _id: 'aegfal',
        name: 'Laptop',
        description: 'MacPro: System Darwin',
        price: 2500,
        ratings: [],
        likes: ['fg12cy']
    },
    {
        _id: 'hedfcg',
        name: 'TV',
        description: 'Smart TV:Procaster',
        price: 400,
        ratings: [{ userId: 'fg12cy', rate: 5 }],
        likes: ['fg12cy']
    }
]
function likeProduct(product,newRate,myKey){

    // Finding the product from the given list
    const index=product.findIndex(value=>value.name===newRate.name);
    
    if(index===-1) return 'product not listed';

    else{
        // const myKey="likes"
         myKey=product[index][myKey];

        // checking if user already rated the product or not
        const userId=myKey.findIndex(likes=>likes.userId===newRate.userId);
        
        if(userId===-1) return myKey.concat(newRate.userId);

        else return 'already liked';
         
    }
}
const newRate={
    userId:'fg12c',
    name: 'TV'
    
}
// console.log(likeProduct(product,newRate,"likes"))
console.log(likeProduct(product,newRate,"ratings"))