import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";

const Home = () => {
    return (
        <section>
            <h1>Home Page in Progress </h1>
            <Link to="/Login">Go to the Login page</Link>
            <br />
            <Link to="/Signup">Go to the Signup page</Link>
            <br />
        </section>
    )

}

export default Home