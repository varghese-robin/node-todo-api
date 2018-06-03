//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Initialising a new Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err) {
        return console.log('Unable to connect to the server');
    } 

    console.log('Connected to the MongoDB server');
    const db = client.db('TodoApp');
    
    //deleteMany
    // db.collection('Todos').deleteMany({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //deleteOne
    // db.collection('Todos').deleteOne({text: "Eat lunch"}).then((result) => {
    //     console.log(result);
    // });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
    //     console.log(result);
    // });

    // db.collection('Users').deleteMany({name:'Robin'}).then((result) => {
    //     console.log(result.result);
    // });

    db.collection('Users').findOneAndDelete({_id: new ObjectID('5b145d4c3d834e65b0f1080d')}).then(result => console.log(result));



    //client.close();

});