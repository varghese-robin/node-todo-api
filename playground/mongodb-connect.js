//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Initialising a new Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err) {
        return console.log('Unable to connect to the server');
    } 

    console.log('Connected to the MongoDB server');
    const db = client.db('TodoApp');
    
    //Inserting a file into a collection -Todo within the Database TodoApp
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if(err) {
    //         return console.log('Unable to insert to do');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));         //ops will fetch the document to be inserted
    // });

    //Inserting a file into a collection -Users within the Database TodoApp
    // db.collection('Users').insertOne({
    //     name:'Robin',
    //     age: 25,
    //     location: 'London'
    // }, (err,result) => {
    //     if(err) {
    //         return console.log('Unable to insert to do');
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    client.close();

});