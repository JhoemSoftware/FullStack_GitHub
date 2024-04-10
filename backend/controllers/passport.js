import passport from 'passport';
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv';
dotenv.config();

import User from './../models/user.model.js';

passport.serializeUser(function(user,done){
    done(null, user);
});

passport.deserializeUser(function(obj, done){
    done(null, obj);
});

passport.use(new GitHubStrategy({
    clientID: process.env.GITHUB_ID_CLIENT,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: '/api/auth/github/callback'
}, async function(accessToken, refreshToken, profile, done){
    console.log(profile);
    const user = await User.findOne({username: profile.username});
    
    if(!user){
        const newUser = new User({
            username: profile.username,
            name: profile.displayName,
            profileUrl: profile.profileUrl,
            avatarUrl: profile.photos[0].value,
            likedProfiles: [],
            likedBy: []
        });

        await newUser.save();
        done(null, newUser);
    }

    done(null, user);
    /* process.nextTick(function(){
        return done(null, profile);
    }); */
}));