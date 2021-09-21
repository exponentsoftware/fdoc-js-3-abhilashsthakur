
const users = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt: '17/05/2019 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt: '17/05/2019 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt: '17/05/2019 9:45 AM',
        isLoggedIn: true
    }
]


//2)a)1 Function for user sign up
function signUp(users, newUser) {

    const userFound = users.findIndex(value => value.email === newUser.email)

    if (userFound === -1) {
        users.push(newUser)
        return users
    }
    else {
        return 'user already exists'
    }
}

//  2)a)2: Function for user login

function signIn(users, login) {

    const userFound = users.findIndex(value => value.email === login.email && value.password === login.password)

    if (userFound === -1) { return 'invalid User' } else { return users[userFound] }
}

const login = {

    email: 'brook@brook.com',
    password: '123111'
}
const newUser = {
    username: 'Brook',
    email: 'brook@brook.com',
    password: '123111'
}
// console.log(signUp(users,newUser))

console.log(signIn(users, login))

