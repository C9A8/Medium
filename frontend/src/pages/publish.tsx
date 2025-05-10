import axios from "axios";
import { AppBar } from "../component/appBar";
import { BACKEND_URL } from "../config";
import { useState } from "react";
import {inferBlogSchema} from '@tiger51423/medium-commom1'
import { useNavigate } from "react-router-dom";

const Publish = () => {
    const navigate = useNavigate()
    const [blogInputs,setBlogInputs] = useState<inferBlogSchema>({
        title : "",
        content : "",
    })

    async function sendRequest() {
         try{
           const response = await axios.post(`${BACKEND_URL}/api/v1/blog/protected`, blogInputs, {
                headers: {
                    Authorization : `Bearer ${localStorage.getItem('token')}`
                }
             })
             
             navigate(`/blog/${response.data.blogs.id}`)
         } catch(error){
            alert("hjkhj")
         }
        
        
    }
    return (
        <div>
            <AppBar author={"TIGeR"} />
            <div className="flex justify-center pt-4">
                <input
                    type="text"
                    id="helper-text"
                    aria-describedby="helper-text-explanation"
                    className="max-w-2xl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-4"
                    placeholder="Title"
                    onChange={(e) => setBlogInputs((prev) => ({ ...prev, title: e.target.value }))}
                />
            </div>
            <div className="flex justify-center pt-2">
                <div className="max-w-2xl w-full">
                    <label
                        htmlFor="message"
                        className="block mb-2 text-sm font-medium text-gray-900"
                    >
                        Your message
                    </label>
                    <textarea
                        id="message"
                        rows="4"
                        className="block p-4 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Write your content here..."
                        onChange={(e)=>setBlogInputs((prev)=>({...prev,content:e.target.value}))}
                    ></textarea>
                    {/* Align the button to the left under the textarea */}
                    <div className="flex justify-start pt-4">
                        <button
                            type="button"
                            onClick={sendRequest}
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded text-sm px-5 py-2.5"
                        >
                            Publish
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Publish;