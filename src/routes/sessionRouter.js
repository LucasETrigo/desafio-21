import passport from '../middlewares/passport.js';
import { Router } from 'express';
import logger from '../utils/logger.js';
import checkAuth from "../middlewares/auth.js";
import { getLogin, postLogin, getLogout, getLoginError, getRegister, postRegister, getRegisterError, get } from "../controllers/sessionController.js";

const sessionRouter = new Router();

sessionRouter.get('/login', logger.logReqInfo, getLogin)

sessionRouter.post('/login', passport.authenticate('login', { failureRedirect: '/login/error' }), postLogin);

sessionRouter.get('/logout', logger.logReqInfo, getLogout)

sessionRouter.get('/login/error', logger.logReqInfo, getLoginError)

sessionRouter.get('/register', logger.logReqInfo, getRegister)

sessionRouter.post('/register', passport.authenticate('register', { failureRedirect: '/register/error' }), postRegister);

sessionRouter.get('/register/error', logger.logReqInfo, getRegisterError)

sessionRouter.get('/', checkAuth, get);

export default sessionRouter;