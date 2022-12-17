import jwt from 'jsonwebtoken';
import { User } from '../models/userModel.js';
import { HydratedDocument } from 'mongoose';
import { config } from '../config/config';

const { accessTokenSecret, refreshTokenSecret } = config;

const dataToJWT = (user: HydratedDocument<User>) => {
  return {
    _id: user._id,
    username: user.username,
    email: user.email,
    roles: user.roles,
  };
};

export const createAccessToken = (data: HydratedDocument<User>) =>
  jwt.sign(dataToJWT(data), accessTokenSecret, { expiresIn: '62m' });

export const createRefreshToken = (data: HydratedDocument<User>) =>
  jwt.sign(dataToJWT(data), refreshTokenSecret);
