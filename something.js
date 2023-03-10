body =[{
    "id": 1,
    "name": "Varun ",
    "is_vaccinated": true,
    "birthdate": "2001-05-12T18:30:00.000Z",
    "gender": "Male"
},
{
    "id": 6,
    "name": "Rishab",
    "is_vaccinated": true,
    "birthdate": "2001-05-02T18:30:00.000Z",
    "gender": "Male"
},
{
    "id": 7,
    "name": "Anshul",
    "is_vaccinated": true,
    "birthdate": "2001-03-23T18:30:00.000Z",
    "gender": "Male"
}
]
// const data = fetch('http://localhost:3001/data')
// console.log(data)

// // const {
// //     birthdate, gender
// // } = body

// console.log(birthdate, gender)

// calculate length of body object
const length = body.length
console.log(length)