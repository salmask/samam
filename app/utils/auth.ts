// utils/auth.ts
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { User, IUser } from '~/models/User';
import { connectToDatabase } from '~/db/connection';
import { Role } from '~/types/role';

import { LoaderFunction, redirect } from '@remix-run/node';
import { parse } from 'cookie'; 

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';
const JWT_EXPIRES_IN = '1h';

export const hashPassword = async (password: string): Promise<string> => {
  return bcrypt.hash(password, 10);
};

export const comparePassword = async (password: string, hash: string): Promise<boolean> => {
  return bcrypt.compare(password, hash);
};

export const generateToken = (user: IUser): string => {
  return jwt.sign(
    { id: user._id, email: user.email, role: user.role },
    JWT_SECRET,
    { expiresIn: JWT_EXPIRES_IN }
  );
};

export const verifyToken = (token: string): IUser | null => {
  try {
    return jwt.verify(token, JWT_SECRET) as IUser;
  } catch (err) {
    return null;
  }
};

export const findUserByEmail = async (email: string): Promise<IUser | null> => {
  await connectToDatabase();
  return await User.findOne({ email }).exec();
};

export const createUser = async (email: string, password: string): Promise<IUser> => {
  await connectToDatabase();
  const user = new User({ email, password, role: Role.User });
  await user.save();
  return user;
};


export const requireAuth = (roles: Role[]): LoaderFunction => {
  return async ({ request }) => {
    const cookie = request.headers.get('Cookie');
    const token = cookie?.split('=')[1];

    if (!token) {
      return redirect('/login');
    }

    const user = verifyToken(token);
    if (!user || !roles.includes(user.role)) {
      return redirect('/login');
    }

    return { user };
  };
};


export const isAuthenticated = async (request: Request): Promise<boolean> => {
  const cookie = request.headers.get('Cookie');
  if (!cookie) return false;

  const { token } = parse(cookie);
  if (!token) return false;

  try {
    const user = token ? verifyToken(token) : null;
    return !!user;
  } catch (err) {
    return false;
  }
};