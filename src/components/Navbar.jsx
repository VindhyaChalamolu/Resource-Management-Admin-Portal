import React from 'react';
import { Logo } from '../Icons/icons';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div>
            <nav className="navbar">
                <Logo />
                {window.location.pathname !== "/Resource-Management-Admin-Portal/addItem" && <button onClick={() => navigate('/addItem')}>ADD ITEM</button>}
                {/* <i class="fa fa-user" aria-hidden="true"></i> */}
            </nav>
        </div>
    )
}

export default Navbar;

