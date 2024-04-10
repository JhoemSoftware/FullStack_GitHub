import { response, request } from 'express';

export const ensureAuth = async (req = request, res = response, next) => {
    console.log('Middleware')
    if( req.isAuthenticated() ) next();
    return res.redirect(`${process.env.CLIENT_BASE_URL}/login`);
}