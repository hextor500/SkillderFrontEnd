import { Link } from 'react-router-dom';

const SignUpCompany = () => {
    return(
        <>  
            <button><Link to={'/'}>Skillder</Link></button>
            <label for="companyName">Name</label>
            <input type="text" id="companyName"></input>
            <label for="addressCompany">Last Name</label>
            <input type="text" id="addressCompany"></input>
            <label for="phoneCompany">Phone number</label>
            <input type="text" id="phoneCompany"></input>
            <label for="emailCompany">City</label>
            <input type="text" id="emailCompany"></input>
            <label for="passwordCompany">About you</label>
            <input type="text" id="passwordCompany"></input>
            <button><Link to={'/'}>Complete Registration</Link></button>
        </>
    )
}

export default SignUpCompany;