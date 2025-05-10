import { Link } from "react-router-dom";

interface props {
    id        : string
    author    : string,
    title     : string,
    content   : string
    published : string
}
export const BlogCard = ({ id, author, title, content, published }: props) => {
    return (
       <Link to={`/blog/${id}`}> <div className="border-b border-slate-200 pt-4 ">
       <div className="flex items-center space-x-2">
           <Avatar name={author} />
           <span className="font-md">{author}</span> <span className="text-gray-500">{published}</span>
       </div>
       <div className="font-bold text-3xl pt-4">{title}</div>
       <div className="font-sm text-lg text-gray-900 pt-3">{content.slice(0, 100) + "....."}</div>
       <div className="text-xs text-slate-500 pt-5">{`${Math.ceil(content.length / 100)} min read`}</div>
   </div></Link>
    );
};

function Avatar({ name }: { name: string }) {
    return (
        <div>
            <div className="relative inline-flex items-center justify-center w-8 h-8 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
                <span className="font-medium text-gray-600 dark:text-gray-300">{name.slice(0, 2)}</span>
            </div>
        </div>
    );
}