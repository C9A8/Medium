import { PrismaClient } from '../generated/prisma/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { Hono } from "hono";
import { authMiddleware } from '../middelware.ts/auth';
import { blogschema,updateBlogschema } from '@tiger51423/medium-commom1';

export const blogRoutes = new Hono<Bindings>();

// Type for context variable
type Bindings = {
    Bindings : {
       DATABASE_URL : string
       JWT_SECRET_KEY : string
   },
    Variables :{
       userId : string
   }
}

//  Initalizing milldeware
blogRoutes.use('/protected/*', authMiddleware)

// Route for creating blogs
blogRoutes.post('/protected', async(c) => {
    try {
        const prisma = new PrismaClient({
            datasourceUrl : c.env.DATABASE_URL,
             }).$extends(withAccelerate())

        //Using authorized token through context       
        const userId = c.get('userId')
        const blogBody = await c.req.json()
        const {success} = blogschema.safeParse(blogBody)
        if(!success){
            c.status(400)
            return c.json({message : "Wrong inputs"})
        }
        const blogs = await prisma.blogs.create({
            data : {
                title     : blogBody.title,
                content   : blogBody.content,
                authorid  : userId
            }
        })
        return c.json({blogs})
    }
    catch(error){
        c.status(401)
        return c.json({message : "Falied to create blog",error : error})
    }
})

// Route for updating blog
blogRoutes.put('/protected/update/:id', async(c) => {

    try {
        const prisma = new PrismaClient({
            datasourceUrl : c.env.DATABASE_URL,
        }).$extends(withAccelerate())


        //Using authorized token through context
        const userId = c.get('userId')
        const updateBody =  await c.req.json()
        const {success} = updateBlogschema.safeParse(updateBody)
        if(!success){
            c.status(400)
            return c.json({message : "Wrong inputs"})
        }
        const param = c.req.param('id')
        const updatedBlogs = await prisma.blogs.update({
            where : {
                id : param,
                authorid : userId
            },
            data : {
                title : updateBody.title,
                content : updateBody.content,
            }
        })
        return c.json({updatedBlogs})

    }
    catch(error){
        c.status(401)
        return c.json({message : "Falied to update blog",error : error})
    }
  
})

 // Route for fetching all blogs
blogRoutes.get('/protected/getAllBlogs', async(c) => {
    try{
        const prisma = new PrismaClient({
            datasourceUrl: c.env.DATABASE_URL,
          }).$extends(withAccelerate())
        
        const allBlogs = await prisma.blogs.findMany({
            select :{
                title : true,
                content : true,
                id : true,
                author : {
                    select : {
                        name : true
                    }
                }
            }
    })
        return c.json({allBlogs})
    }
    catch(error){
        c.status(401)
        return c.json({message : "Falied to fetch all blogs",error : error})
    }
    
})

 // Route for fetching blog through dynamic route
blogRoutes.get('/protected/blog/:id', async(c) => {

    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
      }).$extends(withAccelerate())

     const param = c.req.param("id")

    //Using authorized token through context
    const userId  = c.get('userId')
    const blog = await prisma.blogs.findFirst({
        where : {id : param},
        select :{
            id : true,
            title : true,
            content : true,
            author : {
                select : {
                    name : true
                }
            }
        }
      })

  

  return c.json({blog})
})