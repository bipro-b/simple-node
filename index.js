const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors());
app.use(express.json());
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello Second  Node wow')
})

const users = [
    {
        id: 1,
        name: 'Sabana',
        email: 'b@email.com',
        phone: '0124532422'
    },
    {
        id: 2,
        name: 'Rabana',
        email: 'b@email.com',
        phone: '0124532422'
    },
    {
        id: 3,
        name: 'Labana',
        email: 'b@email.com',
        phone: '0124532422'
    },
    {
        id: 4,
        name: 'Kabana',
        email: 'b@email.com',
        phone: '0124532422'
    },
    {
        id: 5,
        name: 'Habana',
        email: 'b@email.com',
        phone: '0124532422'
    },
    {
        id: 6,
        name: 'Jabana',
        email: 'b@email.com',
        phone: '0124532422'
    },
]

app.get('/users', (req, res) => {
    const search = (req.query.search);
    // use query parametes 
    if (search) {
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult)
    }
    else {
        res.send(users)
    }
});

//App.method
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting ', req.body)
    // res.send('inside post')
    res.json(newUser)
})


// Dynamic API
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})

app.get('/fruits', (req, res) => {
    res.send(['mango', 'banana', 'apple'])
})

app.get('/fruits/mangoes/fazli', (req, res) => {
    res.send('Fazli')

})

app.listen(port, () => {
    console.log('listeing to port', port)
})