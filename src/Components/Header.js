import React from 'react'
import { Link, BrowserRouter as Router, withRouter } from 'react-router-dom'


const Header = (props) => {
    return (
        <Router >
            <nav className="header">
                <h1 className="header-title">Site Title</h1>
                <ul className="header-links">
                        <li>
                        <Link to="/">Home</Link>
                        </li>
                        <li>
                        <Link to="/compare">Comparsion</Link>
                        </li>
                        {/* <li>
                        <Link to="/login">Login</Link>
                        </li> */}
                        <li>
                        <Link to="/scholarship">Scholarship</Link>
                        </li>
                </ul>
            </nav>
        </Router>
    )
}
export default withRouter(Header)