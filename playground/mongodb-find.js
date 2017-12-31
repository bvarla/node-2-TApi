const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
      return console.log('unable to connect to MongoDb Server');
    }
    console.log('Connected to MondoDB server');
    db.collection('Todos').find().toArray().then((docs) => {
      console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log('Unable to fetch todos',err);
    });
    db.close();
});

