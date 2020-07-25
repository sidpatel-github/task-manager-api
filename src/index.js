const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')

const app = express()

// we are using env file to get a local port now!!!
// const port = process.env.PORT || 4000
const port = process.env.PORT


// this is middleware and it should be defined before any `app.use`
// app.use((req, res, next) => {
//     console.log(req.method, req.path)
//     res.status(503).send('Site is down currently come back soon!!!')
// })


// this will parse incoming request as a JSON
app.use(express.json())

const userRoute = require('./routers/user')
const taskRoute = require('./routers/task')
app.use(userRoute)
app.use(taskRoute)


/* Different file created for routes

// create a user
app.post('/users', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        res.send(user)
    } catch (e) {
        res.status(400).send(error)

    }

    // user.save().then(() => {
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(400).send(error)
    // })
})

// get a list of users
app.get('/users', async (req, res) => {

    try {
        const users = await User.find()
        res.send(users)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.find().then((users) => {
    //     res.send(users)
    // }).catch((error) => {
    //     res.status(500).send(error)
    // })
})


// get user by id
app.get('/users/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const user = await User.findById(_id)

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }

    // User.findById(_id).then((user) => {
    //     if (!user) {
    //         return res.status(404).send()
    //     }
    //     res.send(user)
    // }).catch((error) => {
    //     res.status(500).send(error)
    // })
})


app.patch('/users/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    console.log(updates)
    const allowedUpdates = ['name', 'email']


    // checking if request body contains only name and email or not if not then aborting a oprtation
    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        return res.status(404).send({ error: 'Invalid updates!!!!' })
    }

    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/users/:id', async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    } catch (e) {
        res.status(500).send(e)
    }
})

*/

// ***********************************************************************************************

/*
app.post('/tasks', (req, res) => {
    const task = new Task(req.body)

    task.save().then(() => {
        // we are setting status code to 201(created) rather than a default which is 200
        res.status(201).sendsend(task)
    }).catch((error) => {
        res.status(400).send(error)
    })
})

app.get('/tasks', (req, res) => {

    Task.find().then((tasks) => {
        res.send(tasks)
    }).catch((error) => {
        res.status(500).send(error)
    })
})


app.get('/tasks/:id', (req, res) => {

    const _id = req.params.id

    Task.findById(_id).then((user) => {

        if (!user) {
            return res.status(404).send()
        }
        res.send(user)
    }).catch((error) => {
        res.status(500).send(error)
    })
})

app.patch('/tasks/:id', async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['description']

    const isValidOperation = updates.every((update) => {
        return allowedUpdates.includes(update)
    })

    if (!isValidOperation) {
        // return res.status(404).send({ error: 'Invalid updates!!!!' })
    }

    try {
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
    }
})

app.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if (!task) {
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send(e)
    }
})

*/
// ***********************************************************************************************

app.listen(port, () => {
    console.log('server started on port!!!' + port)
})


// ***********************************************************************************************
// ********************** TESTING SCRIPTS **************************
// ***********************************************************************************************


// ====== FILE UPLOAD ===========

const multer = require('multer')
const upload = multer({
    dest: 'images'
})

app.post('/upload', upload.single('uploadKey'), (req, res) => {
    res.send()
})

// ====== HTML ERROR HANDLING TO DISPLAY PROPER ERROR TO USER ===========
// this can happen while using middleware

const errorMiddleware = (req, res, next) => {
    throw new Error('from middleware')
}

app.get('/middlewareError', errorMiddleware, (req, res) => {
    res.send()
}, (error, req, res, next) => {
    res.status(400).send({ error: error.message })
})