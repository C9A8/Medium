import { AppBar } from "./appBar"

interface props {
    id      : string,
    title   : string,
    content : string,
    author  : string,
}

export const Userblog = ({title,content,author} : props)=>{
    return <div className=" h-screen bg-purple-200 ">
        <AppBar author={author} />
        <div><div className="grid grid-cols-12 pt-8">
        <div className=" col-span-8 font-extrabold text-7xl px-12">{title}</div>
        <div className="col-span-4 text-lg">
            Author
            <div className="font-bold">{author}</div>
        </div>
        <div className="col-span-8 px-12 pt-6 text-slate-600 text-lg font-light">{content}</div>

    </div></div>
    </div>
}