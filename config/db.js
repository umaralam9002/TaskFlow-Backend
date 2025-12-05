const mongoose = require('mongoose');


const connectToMongo = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI, {});
        console.log("Mongodb Connected");
    }
    catch(err){
        console.error("error connecting to Mongodb", err);
        process.exit(1);
    }
}
module.exports = connectToMongo;
