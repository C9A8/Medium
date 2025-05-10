import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { sign,decode,verify } from 'hono/jwt'
import { Hono } from "hono";
import { authMiddleware } from '../middelware.ts/auth';
import { signupSchema,signinSchema } from '@tiger51423/medium-commom1';
export const usersRoutes = new Hono<Bindings>();
type Bindings = {
     Bindings : {
        DATABASE_URL   : string
        JWT_SECRET_KEY : string
    },
     Variables : {
        userId : string 
    }
}

// interface pharsebody {
//   email     : string;
//   name     ?: string;
//   password  : string;
  
// }

usersRoutes.post('/signup', async(c) => {

  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())
    
    const signupBody = await c.req.json()
    const {success} = signupSchema.safeParse(signupBody)
    if(!success){
      c.status(411)
      return c.json({message : "Wrong inputs"})
    }
    const users = await prisma.users.create({
      data : {
        email    : signupBody.email,
        name     : signupBody.name,
        password : signupBody.password,
      }
    })
  
    const signupToken = await sign({userId : users.id} , c.env.JWT_SECRET_KEY )
    return c.json({jwt:signupToken});

  }catch(error){
    c.status(401)
    return c.json({error : "Failed to create user"})
  }

  
})

usersRoutes.post('/signin', async(c) => {

  try{
    const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

      const signinBody = await c.req.json()
      const {success} = signinSchema.safeParse(signinBody)
      if(!success){
        c.status(400)
        return c.json({message : "Wrong inputs"})
      }

      const user = await prisma.users.findUnique({
        where : {
          email    : signinBody.email,
          password : signinBody.password
        }
      })

      if(!user){
        return c.json({message : "Incorrect credencial / User does not exits"})
      }

      const signinToken = await sign({userId : user.id},c.env.JWT_SECRET_KEY)
      return c.json({jwt : signinToken})


  } 
   catch(error){
    c.status(403)
    c.json({error : "Signin failed"})
  }
  
})

usersRoutes.get("/getAllUsers",async(c)=>{
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
            }).$extends(withAccelerate())

            const getUsers = await prisma.users.findMany()

            return c.json({getUsers})

    }catch(error){return c.json({})}
})

usersRoutes.get("/getUser",authMiddleware, async(c)=>{
    try {
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
            }).$extends(withAccelerate())

            const userId = c.get('userId')

            const getUsers = await prisma.users.findUnique({
                where : {
                    id : userId
                }
            })

            return c.json({getUsers})

    }catch(error){return c.json({})}
})
