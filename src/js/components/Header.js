import React, {Component} from 'react';

class Header extends Component {

    render() {
        return(
            <div className="Header">
                <ul>
                    <li><a href="www.google.fr">Popular</a></li>
                    <li><a href="https://github.com/RayanBassetti">Trending</a></li>
                    <li><a href="https://github.com/RayanBassetti">Search</a></li>
                </ul>
            </div>
        )
    }
}

export default Header