const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000


app.use(cors())
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello My Second Node!')
});

const users = [
    { id: 0, name: "shabana", email: "shabana@gmail.com", phone: "0124796445" },
    { id: 1, name: "sania", email: "sania@gmail.com", phone: "0124796445" },
    { id: 2, name: "mina", email: "mina@gmail.com", phone: "0124796445" },
    { id: 3, name: "raju", email: "raju@gmail.com", phone: "0124796445" },
    { id: 4, name: "pickachu", email: "pickachu@gmail.com", phone: "0124796445" },
    { id: 5, name: "piku", email: "piku@gmail.com", phone: "0124796445" }

]


app.get('/users', (req, res) => {
    const search = req.query.search;
    // use search query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search))
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
   
});

// APP Method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the post', req.body)
    // res.send(JSON.stringify(newUser))
    res.json(newUser);
})

// Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple', 'oranges'])
});
app.get('/fruits/mango', (req, res) => {
    console.log('yummy yummy')
})




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})