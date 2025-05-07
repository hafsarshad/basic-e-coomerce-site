// // models/User.ts
// import mongoose, { Schema } from 'mongoose';

// const userSchema = new Schema({
//   email: { type: String, required: true, unique: true },
//   username: { type: String, required: true },
//   password: { type: String, required: true },
// });

// export const User = mongoose.models.User || mongoose.model('User', userSchema);
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  token: String,
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
