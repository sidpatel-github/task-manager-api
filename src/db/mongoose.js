const mongoose = require('mongoose')


mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true
})

// const sid = new User({
//     name: 'Siddhu',
//     email: 'SID@gmail.com',
//     // age: 20
// })

// sid.save().then(() => {
//     console.log(sid)
// }).catch((error) => {
//     console.error('Error!', error)
// })

//************************

// const task = new Task({
//     description: 'Learn Node',
//     completed: false
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.error('Error!', error)
// })
