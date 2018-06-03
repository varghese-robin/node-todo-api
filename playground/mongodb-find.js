//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Initialising a new Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err) {
        return console.log('Unable to connect to the server');
    } 

    console.log('Connected to the MongoDB server');
    const db = client.db('TodoApp');
    
    // db.collection('Todos').find({completed: true}).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined,2));
    // }, (err) => {
    //     console.log('Unable to fetch the data from Todos ', err);
    // });

    // db.collection('Todos').find({
    //     _id: new ObjectID("5b133efa06e424cf6c574730")
    // }).toArray().then((docs) => {
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch the data from Todos ', err);
    // });

    db.collection('Users').find({name:"Robin"}).count().then((count) => {
        console.log(`Users count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch the data from Todos ', err);
    })

    //client.close();

});