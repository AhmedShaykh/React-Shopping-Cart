import { FC } from 'react';
import { Link } from "react-router-dom";

const Navbar: FC = () => {
    return (
        <div className="navbar">
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/login"> Login </Link>
            </div>
        </div>
    )
};

export default Navbar;