const mongoose = require('mongoose');

const connect = async (uri) => {
    try{
        const db = await mongoose.connect(uri);
        console.log("Successfully connected to the database");
    }
    catch(err){
        console.log("Unable to connect to the database", err)
    }
}

export default connect;