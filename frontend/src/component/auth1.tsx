import { Link, useNavigate } from 'react-router-dom';
import { Inputs } from './input';
import { useState } from 'react';
import { Footer } from './footer';
import { inferSignupSchema } from '@tiger51423/medium-commom1';
import { BACKEND_URL } from '../config';
import axios from 'axios'

export const Auth1 = () => {
    const [postInputs,setPostInputs] = useState<inferSignupSchema>({
        email    : "",
        password : "",
    })

    const navigate = useNavigate();
    
    async function sendRequest(){
        try{
            const reponse = await axios.post(`${BACKEND_URL}/api/v1/user/signin`,postInputs);
            const jwt = reponse.data.jwt
            localStorage.setItem("token",jwt);
            navigate("/blogs")
        }catch(error){
            alert("chud gye")
        }
      
    }

    return (
        <div className="h-screen items-center flex justify-center">
            <div className="flex-col max-w-lg">
                <div className="w-full text-4xl text-center font-black">Log into your account</div>
                <div className="text-slate-400 text-lg text-center pt-2">
                    Don't have an account? <Link className="underline" to="/signup">Signup</Link>
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
                    <Footer type="Signin" onClick={sendRequest} />
                </div>
            </div>
        </div>
    );
};