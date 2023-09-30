
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div>
            <div className="bg-slate-300">
                <div className='container mx-auto px-10 h-[60vh]'>
                    <h1 className="text-5xl text-center mt-32">Page not fount</h1>
                    <p className="text-2xl text-center mt-6"> <Link className='underline' to={'/'}>Go to home page</Link> </p>
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;


