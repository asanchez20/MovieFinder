import { Link } from "react-router-dom";

function NotFound() {
    return(
        <div>
            <h1>Oops! You Seem to be lost</h1>
            <p>Here are some helpful links:</p>
            <Link to='/'>Home</Link>
            <br />
            <Link to='/about'>About</Link>
        </div>
    )
}

export default NotFound