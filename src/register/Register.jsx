

const Register = () => {
    return (
        <div>
            <div className="bg-slate-300">
                <div className='container mx-auto px-10 h-[60vh] flex justify-center items-center'>
                    <form action="">
                        <h1 className="text-5xl py-7">Register</h1>
                        <input type="text" className="py-2 px-5 rounded-md" placeholder="name" />
                        <br /><br />
                        <input type="text" className="py-2 px-5 rounded-md" placeholder="email" />
                        <br /><br />
                        <input type="text" className="py-2 px-5 rounded-md" placeholder="pass" />
                        <br /><br />
                        <input type="submit" value="Submit" className="bg-blue-400 text-white py-2 px-6 rounded-md cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;