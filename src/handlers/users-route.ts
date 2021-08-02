import express from 'express';
import  jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { User, UserStore } from '../models/users';

dotenv.config();

const { 
    TOKEN_SECRET, 
} = process.env;

const jwtSecret: unknown = TOKEN_SECRET;

const store = new UserStore();

const index = async (req: express.Request,res: express.Response)=>{
    const users = await store.index();
    res.json(users);
}

const create= async (req:express.Request,res:express.Response)=>{
    try {
        const user:User={ id:req.body.id,
            username:req.body.username,
            password:req.body.password
        }
        const newUser= await store.create(user);
        var token = jwt.sign({ user: newUser }, jwtSecret as string);
        res.json(token)
    } catch(err) {
        res.status(400)
        res.json(err)
    }
}

const authenticate = async (req: express.Request, res: express.Response) => {
    const user: User = { id:req.body.id,
      username: req.body.username,
      password: req.body.password,
    }
    try {
        const u = await store.authenticate(user.username, user.password)
        var token = jwt.sign({ user: u }, jwtSecret as string);
        res.json(token)
    } catch(error) {
        res.status(401)
        res.json({ error })
    }
  }



const userRoutes = (app:express.Application) => {
    app.get('/users', index);
    app.post('/users/register',create);
    app.post('/users/login',authenticate)
};

export default userRoutes;