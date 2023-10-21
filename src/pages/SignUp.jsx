import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <>
            <button><Link to={'/'}>Skillder</Link></button>
            <p>Please click on the button to signup as a user or as a company:</p>
            <button><Link to={'/signup/users'}>User</Link></button>
            <button><Link to={'/signup/companies'}>Company</Link></button>
        </>
    )
}

export default SignUp;