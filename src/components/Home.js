import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const Home = () => {
    
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    
    const logout = async () => {
        // if used in more components, this should be in context 
        // axios to /logout endpoint 
        setAuth({});
        navigate('/linkpage');
    }

    return (
        <section>
            <h1>Home Page in Progress </h1>
            <Link to="/Login">Go to the Login page</Link>
            <br />
            <Link to="/Signup">Go to the Signup page</Link>
            <br />
            <div className="flexGrow">
                <button onClick={logout}>Sign Out</button>
            </div>
        </section>
    )

}

export default Home