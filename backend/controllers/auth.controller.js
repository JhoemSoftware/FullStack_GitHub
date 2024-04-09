import { request, response } from "express";

export const userLogin = async (req = request, res = response) => {
    console.log('Llego al controlador')
    res.json({
        msg: 'Hola Auth'
    })
}