const mongodb  = require('mongodb');
const MongoClient = mongodb.MongoClient;

let _db ; 

const mongoConnect = callback => {

     MongoClient.connect('mongodb+srv://richardgobe2:478hYL8TFLVqkSiz@cluster0.oookz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
.then(client =>{

     console.log('Connected');
     _db = client.db('autocore');
     callback(client)
})
.catch(err =>{
     console.log(err);
     throw err ; 
});

};

const getDb = ()  => {
  if(_db) {
     return _db;
  }
  throw "No Database Found " ;

}
exports.mongoConnect = mongoConnect ; 
exports.getDb =  getDb ;  



