import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

const Login = () => {
    return (
        <section>
        <h1>Login Page in Progress </h1>
        <br />
        <Link to="/signup">Go to signup</Link>
        <br />
        <Link to="/">Return to home page</Link>
        </section>
    )

}

export default Login