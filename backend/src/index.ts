import { Hono } from 'hono'
import { usersRoutes } from './routes/usersRoutes'
import { blogRoutes } from './routes/blogRoutes'
import { cors } from 'hono/cors'

const app = new Hono<{Bindings : {
  DATABASE_URL : string
  JWT_SECRET_KEY : string
}}>()

// type Bindings = {
//   DATABADE_URL : string
// }
app.use('/*',cors())
app.route('/api/v1/user',usersRoutes)
app.route('/api/v1/blog',blogRoutes)





export default app
