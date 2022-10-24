import React from "react";

class Nav extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="index.html">
                    <h1 className="logo">Class Test</h1>
                </a>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">React</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">Contact</a>
                    </li>
                </ul>
            </div>
        </nav>
        )
    }
}
export default Nav;