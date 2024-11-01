import { db } from "../models/db";
import { eq } from "drizzle-orm";
import { users } from "../models/User.model";

export const getUsers = async () => {
    try{
        const allUsers = await db.select().from(users);
        return allUsers;
    }catch(err){
        return err.message;
    }
}

export const getUserById = async (id: number) => {
    try{
        const [user] = await db.select().from(users).where(eq(users.userId, id));
        return user;
    }catch(err){
        return err.message;
    }
}

export const getUserByEmail = async (email: string) => {
    try{
        const [user] = await db.select().from(users).where(eq(users.userEmail, email));
        return user;
    }catch(err){
        return err.message;
    }
}