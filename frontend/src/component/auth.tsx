import { Link, useNavigate } from 'react-router-dom';
import { Inputs } from './input';
import { useState } from 'react';
import { Footer } from './footer';
import { inferSignupSchema } from '@tiger51423/medium-commom1';
import { BACKEND_URL } from '../config';
import axios from 'axios'

export const Auth = () => {
    const [postInputs,setPostInputs] = useState<inferSignupSchema>({
        email    : "",
        name     : "",
        password : "",
    })

    const navigate = useNavigate();
    
    async function sendRequest(){
        try{
            const reponse = await axios.post(`${BACKEND_URL}/api/v1/user/signup`,postInputs);
            const jwt = reponse.data.jwt
            localStorage.setItem("token", jwt);
            navigate("/blogs")
        }catch(error){
            alert("chud gye")
        }
      
    }

    return (
        <div className="h-screen items-center flex justify-center">
            <div className="flex-col max-w-lg">
                <div className="text-4xl font-black">Create an account</div>
                <div className="text-slate-400 text-lg text-center pt-2">
                    Already have an account? <Link className="underline" to="/signin">Login</Link>
                </div>
                <div>
                    <Inputs
                        type="text"
                        label="Username"
                        placeholder="Enter your username"
                        onChange={(e) => {console.log(`name ${e.target.value}`),setPostInputs(c=>({...c,name: e.target.value}))}}
                        
                    />
                </div>
                <div>
                    <Inputs
                        type="email"
                        label="Email"
                        placeholder="m@example.com"
                        onChange={(e) => {console.log(`email ${e.target.value}`),setPostInputs(c=>({ ...c,email: e.target.value}))}}
                    />
                </div>
                <div>
                    <Inputs
                        type="password"
                        label="Password"
                        placeholder="......."
                        onChange={(e) => {console.log(`password ${e.target.value}`),setPostInputs(c=>({...c,password: e.target.value}))}}
                    />
                </div>
                <div>
                    <Footer type="Signup" onClick={sendRequest} />
                </div>
            </div>
        </div>
    );
};