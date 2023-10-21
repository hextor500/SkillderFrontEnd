import { Link } from 'react-router-dom';

const LoginCompany = () => {
    return(
        <>
            <button><Link to={'/'}>Skillder</Link></button>
            <label for="emailCompany">Email</label>
            <input type="text" id="emailCompany"></input>
            <label for="passwordCompany">Password</label>
            <input type="text" id="passwordCompany"></input>
            <button><Link to={'/company'}>Login</Link></button>
        </>
    )
}

export default LoginCompany;