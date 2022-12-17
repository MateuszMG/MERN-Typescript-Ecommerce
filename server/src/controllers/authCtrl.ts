import { createAccessToken, createRefreshToken } from '../helpers/jwt';
import { loginSchema, registerSchema } from '../validations/authSchemas';
import { Request, Response } from 'express';
import { UserModel } from '../models/userModel';
import bcrypt from 'bcrypt';

export const authCtrl = {
  register: async (req: Request, res: Response) => {
    try {
      const { email, password, username } = await registerSchema.validateAsync(
        req.body,
      );

      const user = await UserModel.findOne({ email });
      if (user)
        return res.status(400).json({ msg: 'The email already exists.' });

      const passwordHash = await bcrypt.hash(password, 10);
      const newUser = new UserModel({
        username,
        email,
        password: passwordHash,
      });
      await newUser.save();

      const refreshToken = createRefreshToken(newUser);
      const accessToken = createAccessToken(newUser);

      await UserModel.findByIdAndUpdate({ _id: newUser._id }, { refreshToken });

      res.json({ accessToken });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req: Request, res: Response) => {
    try {
      const { email, password } = await loginSchema.validateAsync(req.body);

      const user = await UserModel.findOne({ email });
      if (!user) return res.status(400).json({ msg: 'User does not exist.' });
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).json({ msg: 'Incorrect password.' });

      const refreshToken = createRefreshToken(user);
      const accessToken = createAccessToken(user);

      await UserModel.findByIdAndUpdate({ _id: user._id }, { refreshToken });

      res.json({ accessToken });
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req: Request, res: Response) => {
    try {
      await UserModel.findByIdAndUpdate(
        { _id: req.params.id },
        { refreshToken: '' },
      );

      res.sendStatus(200);
    } catch (err: any) {
      return res.status(500).json({ msg: err.message });
    }
  },
};
