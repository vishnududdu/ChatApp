import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const baseUrl = "mongodb+srv://duduvishnupkl:password%40123@cluster0.khz0i.mongodb.net/chatApp";

export const connectToDatabase = async () => {
    try {
        await mongoose.connect(`${baseUrl}/chatApp`, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("MongoDB connected using mongoose");
    } catch (err) {
        console.log(err);
    }
}
