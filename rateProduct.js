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
        var sum=0
        const productRate = products[index]["ratings"]

        const isUserId = productRate.findIndex(value => value === newReview.userId)
        // return isUserId
        if (isUserId === -1) {

            const Ratings = productRate.concat({ userId: newReview.userId, rate: newReview.rate });
          
            const rate= Ratings.map(value => Object.values(value)[1]) //creating array with rate value
          
            const totalRateing=rate.reduce((prev,curr,rate)=>prev+curr) 
          
            const average=totalRateing/rate.length 

            return {Ratings,average} 

        }
            
        else { return 'user Matched' }
    }

}

const newReview = {
    name: 'TV',
    description: 'Smart TV:Procaster',
    price: 400,
    rate: 5,
    userId: 'fg12c',
}
console.log(Review(products, newReview))