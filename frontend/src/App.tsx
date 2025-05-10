import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react';
import './App.css'

const Signup = lazy(()=> import('./pages/signup'))
const Signin = lazy(()=> import('./pages/signin'))
const Blogs  = lazy(()=> import('./pages/blog')) 
const BlogId = lazy(()=> import('./pages/blogId'))
const Publish = lazy(()=>import('./pages/publish'))
function App() {
  return (
    <>
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/signup"    element={<Signup />} />
          <Route path="/signin"    element={<Signin />} />
          <Route path="/blogs"     element={<Blogs  />} />
          <Route path="/blog/:id"  element={<BlogId />} />
          <Route path="/publish"   element={<Publish />} />
        </Routes>
      </Suspense>
      </BrowserRouter>  
    </>
  )
}

export default App
