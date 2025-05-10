import { Auth } from "../component/auth";
import { Qoutes } from "../component/Qoutes";

const Signup = () => {
    return <div className="grid grid-cols-1 lg:grid-cols-2 h-screen ">
        <div className="flex justify-center ">
            <Auth />
            
        </div>
        <div className="invisible lg:visible">
            <Qoutes />

        </div>
    </div>
}

export default Signup;