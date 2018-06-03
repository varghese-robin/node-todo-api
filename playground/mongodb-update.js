//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//Initialising a new Database
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,client) => {
    if(err) {
        return console.log('Unable to connect to the server');
    } 

    console.log('Connected to the MongoDB server');
    const db = client.db('TodoApp');
    
    //findOneAndUpdate
    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5b14685afe540bb19779828f')
    // }, {
    //     $set: {
    //         completed: true
    //     }
    // }, {
    //     returnOriginal: false
    // }).then(result => console.log(result));

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5b12e7936ab098628a7e2167')
    }, {
        $set: {
            name: "Masilamani"
        },
        $inc: {
            age: 4
        }
    }, {
        returnOriginal: false
    }). then(result => console.log(result));

    //client.close();

});