import { Link } from 'react-router-dom';

const Home = () => {
    return (
    <>
        <button><Link to={'/'}>Skillder</Link></button>
        <p><Link to={'/about'}>About</Link></p>
        <button><Link to={'/signup'}>SignUp</Link></button>
        <button><Link to={'/login'}>Login</Link></button>
    </>
    )
}

export default Home;