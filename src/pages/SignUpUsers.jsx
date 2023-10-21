import { Link } from 'react-router-dom';

const SignUpUsers = () => {
    return(
        <>
            <button><Link to={'/'}>Skillder</Link></button>
            <label for="nameUser">Name</label>
            <input type="text" id="nameUser"></input>
            <label for="lastNameUser">Last Name</label>
            <input type="text" id="lastNameUser"></input>
            <label for="phoneUser">Phone number</label>
            <input type="text" id="phoneUser"></input>
            <label for="cityUser">City</label>
            <input type="text" id="cityUser"></input>
            <label for="aboutUser">About you</label>
            <input type="text" id="aboutUser"></input>
            <label for="emailUser">Email</label>
            <input type="text" id="emailUser"></input>
            <label for="passwordUser">Password</label>
            <input type="text" id="passwordUser"></input>
            <button><Link to={'/'}>Complete Registration</Link></button>
        </>
    )
}

export default SignUpUsers;