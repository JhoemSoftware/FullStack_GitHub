import express from 'express';
import passport from 'passport';

const router = express.Router();

router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));

router.get(
    '/github/callback',
    passport.authenticate('github', { failureRedirect: process.env.CLIENT_BASE_URL + '/login' }),
    function (_, res = express.response) {
        res.redirect(process.env.CLIENT_BASE_URL);
    }
);

router.get('/check', (req = express.request, res = express.response) => {
    if (req.isAuthenticated()) {
        res.send({ user: req.user });
    } else {
        res.send({ user: null });
    }
});

router.get('/logout', (req = express.request, res = express.response) => {
    req.session.destroy((err) => {
        console.log(err);
        res.json({ message: 'Logged out' });
    });
});

export default router;