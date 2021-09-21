const products = [
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

function Review(products, newReview) {
    const index = products.findIndex(value => value.name === newReview.name)
    if (index === -1)
        return 'Invalid Product'

    else {

        const productLike = products[index]["likes"]

        console.log(" prod : ", productLike)

        const isUserId = productLike.findIndex(value => value === newReview.userId )
        // return isUserId
            if(isUserId===-1){

            const pro=productLike.concat(newReview.userId)
            console.log("pro : ", pro)

            }
            else{ return 'user Matched'}

    }

}

const newReview = {
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    userId: 'fg12cy',
}
console.log(Review(products, newReview))