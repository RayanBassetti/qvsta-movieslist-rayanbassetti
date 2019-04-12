import React from 'react' 
import './Header.scss'

export default function Header() {
    return (
        <div className="Header">
            <img alt="logo_themoviedb" width="200" src="https://www.themoviedb.org/assets/2/v4/logos/408x161-powered-by-rectangle-green-bb4301c10ddc749b4e79463811a68afebeae66ef43d17bcfd8ff0e60ded7ce99.png"></img>
            <p>The Movie Db - A React App</p>
        </div>
    )
}