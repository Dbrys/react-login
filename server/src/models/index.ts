import { PrismaClient, Prisma } from '@prisma/client'
import Logger from 'jet-logger';

const prisma = new PrismaClient();


type User = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  
export const createUser = async (reqBod:User ) => {
    try {
        Logger.Info('Inside Create user');
        Logger.Info(reqBod,true)
        const createUser = await prisma.user.create({data:reqBod})
    } 
    catch(e) {
        return e; 
    }
    
}