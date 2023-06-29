import {Link} from "react-router-dom";
import Links from "../Links/Links.jsx";

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                    <li>
                        <Link to="/getdata">Get Data</Link>
                    </li>
                    <li>
                        <Link to="/image">Image</Link>
                    </li>
                    <li>
                        <Links/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;