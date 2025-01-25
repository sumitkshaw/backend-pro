// http://localhost:8383/ server connected to internet
// or ip address: 127.0.0.1:8383

const express = require('express')
const app = express()
const PORT = 8383

let data = ['james']

// MIDDLEWARE
app.use(express.json())

// HTTP verbs (methods) and routes

// the method informs the nature of request and the route is a further
// subdirectory (basically we direct the request to the body of code to respond
// appropriately and these locations or routes are called endpoints )




// TYPE - 1
// website endpoints ( these endpoints are for sending back html and they
// typically come when a user enters a url in a browser)

app.get('/', (req, res)=> {
    // this is endpoint number 1-/
    console.log('User requested the home page website')
    res.send(`
        <body
        style= "background: pink;
        color: blue;">
        <h1>DATA:</h1>
            <p>${JSON.stringify(data)}</p>
            <a href="/dashboard">Dashboard</a>
        </body>
        <script>console.log('This is a script')</script>
        `)
})

app.get('/dashboard', (req,res)=> {
    res.send(`
        <body>
            <h1>Dashboard</h1>
            <a href="/">Homepage</a>            
        </body>
        `)

})

//TYPE - 2   
// API endpoints (NON VISUAL)

// CRUD - create-post read-get update-put and delete-delete

app.get('/api/data', (req,res) => {
    console.log('This one was for data')
    res.status(599).send(data)
})

app.post('/api/data', (req,res) => {
    // someone wants to create a user (for example they click a sign-up button )

    // the user clicks the sign up button after entering thier credentials,
    // and their browser is wired up to send out a network request to the server
    // to handle that action
    const newEntry = req.body
    console.log(newEntry)
    data.push(newEntry.name)
    res.sendStatus(201)
})

app.delete('/api/data', (req,res) =>{
    data.pop()
    console.log('We deleted the element at the end of the array')
})
 
app.listen(PORT, () => console.log(`Server has started on: ${PORT}`))