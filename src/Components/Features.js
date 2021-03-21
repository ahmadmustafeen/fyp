import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const Features =  (props) => {
    return(
    <div className="features">
        <div className="feature-header">

        </div>
        <div className="feature-boxes">
            <div className="feature-box">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <h4>Heading here</h4>
                <p>
                    Some thing to be written here with
                    all non sense and doesnt gives any value
                </p>
            </div>
            <div className="feature-box">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <h4>Heading here</h4>
                <p>
                    Some thing to be written here with
                    all non sense and doesnt gives any value
                </p>
            </div>
            <div className="feature-box">
                <div className="feature-icon">
                    <FontAwesomeIcon icon={faCoffee} />
                </div>
                <h4>Heading here</h4>
                <p>
                    Some thing to be written here with
                    all non sense and doesnt gives any value
                </p>
            </div>
        </div>
        <div className="btn-feature">
            <button>Scholarships</button>
        </div>
    </div>
    )
}


export default Features