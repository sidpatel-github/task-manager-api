// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID

// onject destructuring for code cleaning
const { MongoClient, ObjectID, DBRef } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

const id = new ObjectID()

// console.log(id)

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)


    //*************** ISNERT *******************


    // db.collection('users').insertOne({
    //     name: 'Sid',
    //     age: 30
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })


    /**
     * insert using out own objectID
     */

    // db.collection('users').insertOne({
    //     _id: id,
    //     name: 'Hritik',
    //     age: 25
    // }, (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert user')
    //     }
    //     console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    //     {
    //         name: 'MS',
    //         age: 25
    //     }, {
    //         name: 'Yuvi',
    //         age: 25
    //     }
    // ], (error, result) => {
    //     if (error) {
    //         return console.log('Unable to insert multiple users')
    //     }
    //     console.log(result.ops)
    // })

    //*************** READ *******************
    // db.collection('users').findOne({ name: 'Sid' }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').findOne({ _id: new ObjectID("5f09296541addb7864843dd7") }, (error, user) => {
    //     if (error) {
    //         return console.log('Unable to find user')
    //     }
    //     console.log(user)
    // })

    // db.collection('users').find({ age: 25 }).toArray((error, users) => {
    //     if (error) {
    //         return console.log('Unable to find multiple users')
    //     }
    //     console.log(users)
    // })



    //*************** UPDATE *******************
    // db.collection('users').updateOne({
    //     _id: new ObjectID("5f09296541addb7864843dd7")
    // }, {
    //     $set: {
    //         name: 'Mike'
    //     }, $inc: {
    //         age: 10
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').updateMany({
    //     age: 25
    // }, {
    //     $inc: {
    //         age: 1
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })


    //*************** DELETE *******************


    db.collection('users').deleteMany({
        age: 25
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })
})