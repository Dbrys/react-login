import { OK, BAD_REQUEST } from 'http-status-codes';
import { Controller, Middleware, Get, Post, Put, Delete, ClassMiddleware } from '@overnightjs/core';
import { Request, Response } from 'express';
import cors from 'cors';


@Controller('/')
@ClassMiddleware([cors()])
export class UserController {

    @Get()
    get(req: Request, res: Response): any {
        // console.log(req.params.id);
        return res.status(200).json({msg: 'get_called'});
    }

}