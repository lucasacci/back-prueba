import mongoose from "mongoose";
//localhost = 127.0.0.1
// const url = 'mongodb://localhost:27017/cafe-benito-santos'; //local
const url = "mongodb+srv://lucasacci:RMfXXIF1ka3l487h@clustercafecrud.1ovnlam.mongodb.net/cafeDBcrud"; //produccion

mongoose.connect(url, {
    family: 4
});

const connection = mongoose.connection;

connection.once('open', ()=>{
    console.log('BD conectada')
})