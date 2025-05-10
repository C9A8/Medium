import { Auth1 } from "../component/auth1";
import { Qoutes } from "../component/Qoutes";

const Signin = ()=>{
    return <div className="grid grid-cols-1 lg:grid-cols-2 h-screen ">
    <div className="flex justify-center ">
        <Auth1 />
        
    </div>
    <div className="invisible lg:visible">
        <Qoutes />

    </div>
</div>
        
    
}

export default Signin;