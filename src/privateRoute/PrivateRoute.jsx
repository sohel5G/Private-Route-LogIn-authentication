import PropTypes from 'prop-types';
import { useContext } from "react";
import { authContext } from "../authProvider/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(authContext);

    if(loading){
        return <div className='container mx-auto px-10 h-[60vh] flex justify-center items-center'><span className="loading loading-bars loading-sm"></span></div>
    }

    return (
        <>
            {
                user ? children : <Navigate to={'/register'}></Navigate>
            }
        </>
    )
};


export default PrivateRoute;

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired
}
