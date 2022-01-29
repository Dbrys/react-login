import { Controller, Middleware, Get, Post, Put, Delete, ClassMiddleware } from '@overnightjs/core';
import { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Logger from 'jet-logger';
import { createUser } from '../models';

@Controller('/')
@ClassMiddleware([cors(), bodyParser.json()])
export class UserController {

    @Post('register_user')
    private(req: Request, res: Response): any {
        Logger.Info(req.body, true);
        createUser(req.body);
        return res.status(200).json({ msg: 'get_called' });
    }

}