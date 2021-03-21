import React from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import ScholarShipComponent from '../../Components/ScholarshipComponent'


const ScholarShip = (props) => {
    return (
        <>
        <Header/>
    <div className="scholarship">
    <div className="scholarship-row">
        <div className="scholarship-item">
                <ScholarShipComponent heading="Sukker" id="1"/>
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent heading="Lahore" id="2"/>
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent heading="Karachi" id="3"/>
            </div>
        </div>
        {/* <div className="scholarship-row">
        <div className="scholarship-item">
                <ScholarShipComponent />
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent />
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent />
            </div>
        </div>
        <div className="scholarship-row">
        <div className="scholarship-item">
                <ScholarShipComponent />
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent />
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent />
            </div>
        </div> */}
    </div>
    <Footer />
    </>
    )
}
export default ScholarShip