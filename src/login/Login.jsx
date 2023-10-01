import { useContext, useState } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const [suc, setSuc] = useState('')
    const [err, setErr] = useState('')
    const { signInUser } = useContext(authContext)
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        setSuc('')
        setErr('')

        signInUser(email, password)
            .then(() => {
                setSuc('Log in success')
                e.target.reset()
                navigate('/dashboard')
            })
            .catch(error => {
                setErr(error.message)
            });
    }

    return (
        <div>
            <div className="bg-slate-300">
                <div className='container mx-auto px-10 h-[60vh] flex justify-center items-center'>
                    <form onSubmit={handleLogin}>
                        <h1 className="text-5xl py-7">Login</h1>
                        {suc && <h1 className="text-sm text-green-500">{suc}</h1>}
                        {err && <h1 className="text-sm text-red-500">{err}</h1>}
                        <input name="email" type="text" className="py-2 px-5 rounded-md" placeholder="email" />
                        <br /><br />
                        <input name="password" type="text" className="py-2 px-5 rounded-md" placeholder="pass" />
                        <br /><br />
                        <input type="submit" value="Submit" className="bg-blue-400 text-white py-2 px-6 rounded-md cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login; <h1>LogIN page</h1>