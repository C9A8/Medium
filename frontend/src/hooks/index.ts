import { useEffect, useState } from "react"
import axios  from "axios"
import { BACKEND_URL } from "../config"

interface Blog {
    id: string;
    title: string;
    content: string;
    author: {name : string};
}

export const useBlogId = ({id}:{id:string})=>{
    const [loading,setLoading] = useState(true)
    const [blog,setBlog]     = useState<Blog>({
        id: "",
        title: "",
        content: "",
        author: { name: "" }
    })


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/protected/blog/${id}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
            
        })
        .then(reponse=>{
            setBlog(reponse.data.blog)
            setLoading(false)
        })
    },[id])

    return {
        loading,blog
    }

}

export const useblog = ()=>{
    const [loading,setLoading] = useState(true)
    const [blogs,setBlogs]     = useState<Blog []>([])


    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/blog/protected/getAllBlogs`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
            
        })
        .then(reponse=>{
            setBlogs(reponse.data.allBlogs)
            setLoading(false)
        })
    },[])

    return {
        loading,blogs
    }
}
