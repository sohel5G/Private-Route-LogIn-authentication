import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { authContext } from "../authProvider/AuthProvider";

const Header = () => {

    const { user, logOut } = useContext(authContext);

    const li = <>
        <li> <NavLink className="hover:text-white text-xl mr-4 text-white" to={'/'}>Home</NavLink> </li>
        <li> <NavLink className="hover:text-white text-xl mr-4 text-white" to={'/about'}>About</NavLink> </li>
        <li> <NavLink className="hover:text-white text-xl text-white" to={'/contact'}>Contact</NavLink> </li>
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                
            })
            .catch(() => {
                
            });
    }

    return (
        <header className="bg-gray-700">
            <div className="navbar container mx-auto px-10 py-3 flex-col lg:flex-row">
                <div className="justify-center lg:navbar-start w-full lg:w-2/4">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="text-white h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gray-700 rounded-box w-52">
                            {li}
                        </ul>
                    </div>
                    <Link to={'/'} className="btn btn-ghost normal-case text-xl text-white">Login Authentication <br /> Private Route</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {li}
                    </ul>
                </div>
                {
                    user ? <>
                        <div className="lg:navbar-end mt-10 lg:mt-0 w-full lg:w-2/4 justify-center">
                            <Link to={'/dashboard'} className="btn mr-3 py-2 px-3 capitalize h-auto min-h-0">Dashboard</Link>
                            <Link onClick={handleLogOut} to={'/'} className="btn mr-3 py-2 px-3 capitalize h-auto min-h-0">Log out</Link>
                            <div>
                                <h3 className="text-white text-base font-semibold -mb-1">{user?.displayName ? user?.displayName : 'Unknown name'}</h3>
                                <a className="text-white text-xs"> {user?.email} </a>
                            </div>
                        </div>
                    </> :
                        <>
                            <div className="lg:navbar-end mt-10 lg:mt-0 w-full lg:w-2/4 justify-center">
                                <Link to={'/login'} className="btn mr-3 py-2 px-3 capitalize h-auto min-h-0">Log in</Link>
                                <Link to={'/register'} className="btn mr-3 py-2 px-3 capitalize h-auto min-h-0">Register</Link>
                            </div>
                        </>
                }

            </div>
        </header>
    );
};

export default Header;