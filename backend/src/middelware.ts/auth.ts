
import {Context} from 'hono';
import { verify,decode } from 'hono/jwt';


export const authMiddleware = async(c:Context,next:()=>Promise<void>)=>{
    const authHeader = c.req.header('Authorization') || ""
    if(!authHeader || !authHeader.startsWith('Bearer')){
        return c.json({error : 'Unauthorized'},401)
    }

    const token = authHeader.split(' ')[1];
    try{

        const payload = await verify(token,c.env.JWT_SECRET_KEY)
        c.set('userId', payload.userId)
        await next();

    } catch(error){
        return c.json({error : 'Invalid or exprire token'},401)
    }
}


