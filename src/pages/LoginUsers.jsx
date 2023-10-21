import { Link } from 'react-router-dom';

const LoginUsers = () => {
    return(
        <>
            <button><Link to={'/'}>Skillder</Link></button>
            <label for="emailUser">Email</label>
            <input type="text" id="emailUser"></input>
            <label for="passwordUser">Password</label>
            <input type="text" id="passwordUser"></input>
            <button><Link to={'/users'}>Login</Link></button>
        </>
    )
}

export default LoginUsers;

