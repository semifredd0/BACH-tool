import '../styles/NavBar.css';
import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";

const NavBar = () => {
    const [address, setAddress] = useState("");
    return (
        <nav>
            <div className="nav-container">
                <div className="nav-title">
                    <a href="/">Bitcoin Address Clustering</a>
                </div>
                <div className="nav-search">
                    <form>
                        <input type="text" placeholder="Paste a bitcoin address..."
                               value={address} onChange={e => setAddress(e.target.value)} />
                        <Link to={`/${address}`}>
                            <button type="button">Search</button>
                        </Link>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;