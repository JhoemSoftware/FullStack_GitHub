import { request, response } from "express";

export const healthCheck = (req = request, res = response) => {
    const { url } = req.params;

    res.status(200).json({
        title: 'Success',
        message: 'MERN Github Backend running 😃',
        path: `${url.toUpperCase()}`
    });
};

export const welcomePage = (_, res = response) => {
    res.status(200).json({
        title: 'Success',
        message: 'MERN Github Backend running 😃'
    });
};