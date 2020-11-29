import axios from 'axios'

let url

if (process.env.NODE_ENV === 'production') {
    url = 'https://hdt-mongodb.herokuapp.com'
} else {
    url = "http://localhost:8080"
}

export const connection = axios.create({
    baseURL: url
})

console.log(url)