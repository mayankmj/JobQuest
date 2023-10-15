import mongoose from "mongoose";

const dbConnection = async (db_url) =>{
    try {
        await mongoose.connect(db_url,{useUnifiedTopology:true})
        console.log('database connected successfully');
    } catch (error) {
        console.log('Error while connecting with db',error.message);
    }
}


export default dbConnection
