import mongoose, { Document } from 'mongoose';

enum UserRoles {
  GUEST = 'GUEST',
  USER = 'USER',
  MODERATOR = 'MODERATOR',
  ADMINISTRATOR = 'ADMINISTRATOR',
}

export interface User extends Document {
  _id: string;
  username: string;
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
  roles: UserRoles[];
}

const UserRolesSchema = new mongoose.Schema({
  value: {
    type: String,
    enum: [
      UserRoles.GUEST,
      UserRoles.USER,
      UserRoles.MODERATOR,
      UserRoles.ADMINISTRATOR,
    ],
  },
});

export const UserModel = mongoose.model<User>(
  'user',
  new mongoose.Schema(
    {
      username: {
        maxlength: 40,
        minlength: 3,
        required: true,
        trim: true,
        type: String,
      },
      email: {
        lowercase: true,
        maxlength: 128,
        min: 3,
        required: true,
        trim: true,
        type: String,
        unique: true,
      },
      password: {
        maxlength: 72,
        minlength: 6,
        required: true,
        trim: true,
        type: String,
      },
      accessToken: String,
      refreshToken: String,
      roles: [UserRolesSchema],
    },
    {
      timestamps: true,
    },
  ),
);
