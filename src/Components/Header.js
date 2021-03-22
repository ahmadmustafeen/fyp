import React from 'react'
import { Link, BrowserRouter as Router, withRouter } from 'react-router-dom'


const Header = (props) => {
    return (
        <Router >
            <nav className="header">
                <h1 className="header-title">Site Title</h1>
                <ul className="header-links">
                        <li>
                            
                        <a href="/">Home</a>
                        
                        
                        </li>
                        <li>
                        <a href="./compare">Comparsion</a>
                        </li>
                        {/* <li>
                        <Link to="/login">Login</Link>
                        </li> */}
                        <li>
                        <a href="/scholarship">Scholarship</a>
                        </li>
                </ul>
            </nav>
        </Router>
    )
}
export default withRouter(Header)