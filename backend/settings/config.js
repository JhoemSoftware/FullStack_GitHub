import mongoose from 'mongoose';

export const connMongoDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CONN);
        console.log('Database connection success!! 😎');
    } catch (error) {
        console.clear();
        console.log(error);
    }
}