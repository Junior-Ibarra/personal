import React from 'react'
import './Header.css';

const Header = () => {
    return <nav>
            <label>Film Fools</label>
            <ul>
                <li><a href='watched'>Watched</a></li>
                <li><a href='watchlist'>Watchlist</a></li>
                <li><a href='logout'>Logout</a></li>
            </ul>
        </nav>
    
}

export default Header