import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { useNavigate } from "react-router-dom";
// import { auth } from "../firebaseAuthConfig/FirebaseAuthConfig";
// import { updateProfile } from "firebase/auth";



const Register = () => {
    const { createUser, userProfileUpdate } = useContext(authContext);
    const navigate = useNavigate()

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
            .then((data) => {
                console.log(data.user);

            userProfileUpdate({ displayName: name })
                .then((data) => {
                    console.log(data)
                }).catch((error) => {
                    console.log(error)
                })

                e.target.reset()
                navigate('/dashboard')

            }).catch((data) => {
                const error = data
                console.log(error)
                return
            });

    }

    return (
        <div>
            <div className="bg-slate-300">
                <div className='container mx-auto px-10 h-[60vh] flex justify-center items-center'>
                    <form onSubmit={handleRegister}>
                        <h1 className="text-5xl py-7">Register</h1>
                        <input name="name" type="text" className="py-2 px-5 rounded-md" placeholder="name" />
                        <br /><br />
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

export default Register;


