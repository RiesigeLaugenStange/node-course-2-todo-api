//const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
       console.log('Unable to connect to MongoDB server');
    }
    else {
        console.log('Connected to MongoDB server');


        // const db = client.db('TodoApp')
        // db.collection('Todos').insertOne({

        //     text: 'Something to do',
        //     completed: false

        // }, (err, result) => {
        //     if(err){
        //         return console.log('Unable to connect', err);
        //     }

        //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
        // });


        // client.close();




        const db = client.db('TodoApp')

        db.collection('Todos').find({completed: false}).toArray().then((docs) => {

            console.log('Todos');
            console.log(JSON.stringify(docs,  undefined, 2));
        }, (err) => {
            console.log('Unable to fetch todos', err);
        })

        //client.close();


    }

    
});

