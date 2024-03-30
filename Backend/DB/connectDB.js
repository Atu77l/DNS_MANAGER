const mongoose=require('mongoose');

const connectDB=async ()=>{
    try{
        
        const conn=await mongoose.connect(process.env.MONGO_URL,{
            useNewUrlParser: true, 
    useUnifiedTopology: true,
    family: 4,
                serverSelectionTimeoutMS: 5000, // Set your desired timeout value

        });
        console.log(`Mongo DB Connected`);
    }
    catch(err)
    {
        console.error(err);
        process.exit(1);
    }
}

module.exports=connectDB;