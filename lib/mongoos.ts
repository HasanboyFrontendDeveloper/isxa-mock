import mongoose, { ConnectOptions } from "mongoose";

let isConnetced: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);

  if (!process.env.MONGO_URI) {
    return console.error("MONGO URI not Found");
  }

  if (isConnetced) {
    return;
  }

  try {
    const options: ConnectOptions = {
      dbName: "isxa-mock",
      autoCreate: true,
    };

    await mongoose.connect(process.env.MONGO_URI, options);
    isConnetced = true;
 
    console.log('Connected to Database');
    
  } catch (error) {
    console.log("error to connect to Database");
    console.log(error);
    
  }
};
