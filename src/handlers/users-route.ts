import express from 'express';
import { User, UserStore } from '../models/users';

const store = new UserStore();

const index = async (req: express.Request,res: express.Response)=>{
    const users = await store.index();
    res.json(users);
}

const create= async (req:express.Request,res:express.Response)=>{
    try{
        const user:User={ id:req.body.id,
            username:req.body.username,
            password:req.body.password
        }
        const newUser= await store.create(user);
        res.json(newUser);
    }catch(err){
        res.status(400)
        res.json(err)
    }  
}

const bookRoutes = (app:express.Application) => {
    app.get('/users', index);
    app.post('/users',create)
};

export default bookRoutes;