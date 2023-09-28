import mongoose from "mongoose";

let connectToDb = async () => {
  try {
    await mongoose.connect(process.env.mongooseuri);
  } catch {
    console.log("oh no");
  }
};

export default connectToDb;
