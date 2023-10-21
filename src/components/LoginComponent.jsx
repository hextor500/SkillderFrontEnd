import { useState } from "react";

const LoginComponent = () => {
    const [loginState, setLoginState] = useState("Logout");

    const [jwtToken, setJwtToken] = useState(null);

    const loginRequest = () => {
        setLoginState("Logged")
    };

    const logoutRequest = () => {
        setLoginState("Logout")
    };
    const jwtTokenRequest = () => {
        setJwtToken("")
    }

    return(
        <>
            <button onClick={loginRequest}>Login</button>
            <button onClick={logoutRequest}>Logout</button>
            <p>{loginState}</p>
        </>
    )
}

export default LoginComponent;