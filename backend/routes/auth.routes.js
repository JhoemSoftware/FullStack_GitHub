import express from 'express';
import { request, response } from 'express';
import passport from 'passport';

const router = express.Router();

router.get(
    '/github',
    passport.authenticate('github', { scope: ['user:email'] }));

router.get(
    '/github/callback',
    passport.authenticate('github', {
        failureRedirect: process.env.CLIENT_BASE_URL + '/login'
    }), function (_, res) {
    res.redirect(process.env.CLIENT_BASE_URL);
});

router.get('/check', (req = request, res = response) => req.isAuthenticated() ? res.send({user: req.user}) : res.send({user: null}));

router.get('/logout', (req, res) => {
    req.session.destroy((e) => {
        console.log(e);
        return res.json({ message: '¡Logged out!' });
    });
});

export default router;