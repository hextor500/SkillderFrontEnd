import { Link } from 'react-router-dom'

const About = () => {
    return (
    <>
        <p><Link to={'/'}>Home</Link></p>
        <h1>About us:</h1>
        <p>Skillder is a website that helps companies to connect with skill persons</p>
    </>
    )
}

export default About;