import mongoose from "mongoose"

const connectDB = async () => {
  try {
    console.log("Mongoose URI =>", process.env.mongoose_connection); 
    await mongoose.connect(process.env.mongoose_connection, {
      
    });
    console.log("MongoDB Connected Successfully ✔");
  } catch (error) {
    console.error("MongoDB Error ❌", error.message);
    process.exit(1);
  }
};

export default connectDB;
