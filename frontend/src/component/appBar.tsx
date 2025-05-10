import { Link } from "react-router-dom"

export const AppBar = ({author}:{author:string})=>{
    return <div>
        <div className="border-b border-slate-400 flex justify-between px-10 pt-4">
            <Link to="/blogs" ><div className="font-bold text-2xl text-slate-700">MEDIUM</div></Link>
            <div className="pb-2">
            <Link to={`/publish`}><button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-1 px-2 mr-4 rounded-full">
                     Publish
             </button></Link>
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300 ">{(author|| "Anonymous").slice(0, 2)}</span>
            </div>
            </div>
        </div>
    </div>
}