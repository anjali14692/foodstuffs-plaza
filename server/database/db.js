import mongoose from "mongoose";


const Connection = async (username, password) => {

    const URL ='mongodb://${username}:${password}@ac-cktdnmd-shard-00-00.6w7auuu.mongodb.net:27017,ac-cktdnmd-shard-00-01.6w7auuu.mongodb.net:27017,ac-cktdnmd-shard-00-02.6w7auuu.mongodb.net:27017/pizza-plaza-db?ssl=true&replicaSet=atlas-vmbwds-shard-0&authSource=admin&retryWrites=true&w=majority';

    try{
          await mongoose.connect(URL, {useUnifiedTopology: true, useNewUrlParser: true 
        });
            console.log('Database connected successfully');
    } catch (error){
        console.log('Error while connecting with the database', error);
    }

}



export default Connection;