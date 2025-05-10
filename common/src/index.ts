import { z } from 'zod' // Importing Zod for schema validation

// ----------------------------- Signup Schema -----------------------------

// Schema for validating signup requests
export const signupSchema = z.object({
    email: z.string().email({ message: "Email can not be empty" }), // Email must be a valid email address
    name: z.string().optional(), // Name is optional
    password: z.string().min(6, { message: "Password can not be empty" }) // Password must have a minimum length of 6
})

// Type inference for the signup schema
export type inferSignupSchema = z.infer<typeof signupSchema>; // Generates a TypeScript type from the signup schema

// ----------------------------- Signin Schema -----------------------------

// Schema for validating signin requests
export const signinSchema = z.object({
    email: z.string().email({ message: "Email can not be empty" }), // Email must be a valid email address
    password: z.string().min(6, { message: "Password can not be empty" }) // Password must have a minimum length of 6
})

// Type inference for the signin schema
export type inferSigninSchema = z.infer<typeof signinSchema>; // Generates a TypeScript type from the signin schema

// ----------------------------- Blog Schema -----------------------------

// Schema for validating blog creation requests
export const blogschema = z.object({
    title: z.string(), // Title of the blog (required)
    content: z.string(), // Content of the blog (required)
    // published: z.boolean().default(true), // Uncomment if you want to include a default published status
    // authorid: z.string() // Uncomment if you want to include the author's ID
})

// Type inference for the blog schema
export type inferBlogSchema = z.infer<typeof blogschema>; // Generates a TypeScript type from the blog schema

// ----------------------------- Update Blog Schema -----------------------------

// Schema for validating blog update requests
export const updateBlogschema = z.object({
    title: z.string(), // Title of the blog (required for update)
    content: z.string(), // Content of the blog (required for update)
})

// Type inference for the update blog schema
export type inferUpdateBlogSchema = z.infer<typeof updateBlogschema>; // Generates a TypeScript type from the update blog schema