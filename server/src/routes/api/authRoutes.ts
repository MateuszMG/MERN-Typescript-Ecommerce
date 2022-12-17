import express from 'express';
import { authCtrl } from '../../controllers/authCtrl';

const router = express.Router();

router.post('/register', authCtrl.register);
router.post('/login', authCtrl.login);
router.post('/logout/:id', authCtrl.logout);

export const authRoutes = router;
