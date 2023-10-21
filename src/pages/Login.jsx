import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <button><Link to={'/'}>Skillder</Link></button>
            <p>Please click on the button to login as a user or as a company:</p>
            <button><Link to={'/login/users'}>User</Link></button>
            <button><Link to={'/login/companies'}>Company</Link></button>
        </>
    )
}

export default Login;