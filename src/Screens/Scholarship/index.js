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
        <div className="scholarship-row">
    <div className="scholarship-item">
                <ScholarShipComponent heading="Hyderabad" id="1"/>
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent heading="Mirpurkhas" id="2"/>
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent heading="Islamabad" id="3"/>
            </div>
        </div>
        <div className="scholarship-row">
    <div className="scholarship-item">
                <ScholarShipComponent heading="Quetta" id="1"/>
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent heading="Peshawar" id="2"/>
            </div>
            <div className="scholarship-item">
                <ScholarShipComponent heading="Kohat" id="3"/>
            </div>
        </div>
    </div>
    <Footer />
    </>
    )
}
export default ScholarShip