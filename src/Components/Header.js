import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/free-solid-svg-icons'

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
                        <Link to="/scholarship" className="header-link-item"> Review</Link>
                        <Link to="/scholarship" className="header-link-item"> News</Link>
                        <Link to="/scholarship" className="header-link-item"> Scholarship</Link>
                        <Link to="/admission" className="header-link-item"> Admission</Link>


                        <FontAwesomeIcon size="2x"  icon={faUserCircle}  />
                        
                </div>
            </nav>
    )
}
export default (Header)