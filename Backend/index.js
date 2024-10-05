import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";



dotenv.config();

const app = express();
app.use(cors())
const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;


app.use(express.json());


const connectDB = async () => {
  try {
    await mongoose.connect(URI);  
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1); 
  }
};

connectDB(); 


app.use("/book", bookRoute);
app.use("/user", userRoute);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
