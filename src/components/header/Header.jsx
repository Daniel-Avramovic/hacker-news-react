import React from 'react';
import './header.css'
const Header = ({loadMore}) => {
    return(
        <header>
        <h1>Hacker news</h1>
        <button onClick={loadMore} className="btn btn-primary btn-sm">Load more</button>
        </header>
    )
};

export default Header;