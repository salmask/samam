import mongoose, { Document, Schema } from 'mongoose';
import bcrypt from 'bcryptjs';   
import { Role } from '~/types/role';

export interface IUser extends Document {
  email: string;
  password: string;
  role: Role;
}

const UserSchema: Schema<IUser> = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: Role, required: true },
});

UserSchema.pre<IUser>('save', async function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Check if the model is already compiled before defining it
const User = mongoose.models.User || mongoose.model<IUser>('User', UserSchema);
export { User };
