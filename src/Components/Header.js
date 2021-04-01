import React from 'react'
import { Link } from 'react-router-dom'


const Header = (props) => {
    return (
            <nav className="header">
                <h1 className="header-title">Site Title</h1>
                <div className="header-links">
                    
                            
                        <Link to="/home" className="header-link-item"> Home</Link>
                        
                    
                        
                        <Link to="/compare" className="header-link-item"> Comparsion</Link>
                        
                       
                    
                        
                        <Link to="/scholarship" className="header-link-item"> Scholarship</Link>
                        
                </div>
            </nav>
    )
}
export default (Header)