"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBlogschema = exports.blogschema = exports.signinSchema = exports.signupSchema = void 0;
const zod_1 = require("zod"); // Importing Zod for schema validation
// ----------------------------- Signup Schema -----------------------------
// Schema for validating signup requests
exports.signupSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Email can not be empty" }), // Email must be a valid email address
    name: zod_1.z.string().optional(), // Name is optional
    password: zod_1.z.string().min(6, { message: "Password can not be empty" }) // Password must have a minimum length of 6
});
// ----------------------------- Signin Schema -----------------------------
// Schema for validating signin requests
exports.signinSchema = zod_1.z.object({
    email: zod_1.z.string().email({ message: "Email can not be empty" }), // Email must be a valid email address
    password: zod_1.z.string().min(6, { message: "Password can not be empty" }) // Password must have a minimum length of 6
});
// ----------------------------- Blog Schema -----------------------------
// Schema for validating blog creation requests
exports.blogschema = zod_1.z.object({
    title: zod_1.z.string(), // Title of the blog (required)
    content: zod_1.z.string(), // Content of the blog (required)
    // published: z.boolean().default(true), // Uncomment if you want to include a default published status
    // authorid: z.string() // Uncomment if you want to include the author's ID
});
// ----------------------------- Update Blog Schema -----------------------------
// Schema for validating blog update requests
exports.updateBlogschema = zod_1.z.object({
    title: zod_1.z.string(), // Title of the blog (required for update)
    content: zod_1.z.string(), // Content of the blog (required for update)
});
