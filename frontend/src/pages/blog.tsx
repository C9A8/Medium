import { AppBar } from "../component/appBar"
import { BlogCard } from "../component/blogCard"
import { Skeleten } from "../component/skeleten"
import { useblog } from "../hooks"

 const Blogs = ()=>{
    const {blogs,loading} = useblog()
    if(loading){
        return <div>
            <AppBar  author={"TIGeR"}/>
            <div className="">
            <Skeleten />
            <Skeleten />
            <Skeleten />
            <Skeleten />
            <Skeleten />
            <Skeleten />

            </div>
           
             </div>
    }
    return <div>
        <AppBar author={"TIGeR"}/>
        <div className=" flex justify-center">
        <div className="max-w-3xl">
            {blogs.map(blog=> <BlogCard id={blog.id} author={blog.author.name || "Anonymous"} published={"FEB 16,2025"} title={blog.title} content={blog.content}/>)}
        </div>
</div>
    </div>
}

export default Blogs