import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import SelectItem from '../../Components/SelectItem'
import HeaderText from '../../Components/HeaderText'


const CITY = [
    {
        id: 1,
        name: "Karachi"
    },
    {
        id: 2,
        name: "Islamabad"
    },
    {
        id: 3,
        name: "Lahore"
    },
    {
        id: 4,
        name: "Peshawar"
    },
    {
        id: 5,
        name: "RawalPindi"
    },
]

const Admission = (props) => {
    return (
        <>
            <Header />
            <div className="admission">
                <div className="admission-title">
                    <HeaderText
                        headingLeft="Check"
                        headingRight="Admission Criteria"
                        paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
                    />
                </div>
                <div class="admission-header">
                    <div style={{ width: '40%', }}>
                        <SelectItem
                            title="Select City"
                            selectItem={(id) => console.log(id.target.value)}
                            placeholder="Select a City"
                            data={CITY}
                        />
                    </div>
                    <div style={{ width: '40%', }}>
                        <SelectItem
                            title="Select a Program"
                            selectItem={(id) => console.log(id.target.value)}
                            placeholder="Select a Program"
                            data={CITY}
                        />
                    </div>
                </div>
                <div>
                    
                </div>

            
            
            
            
            
            
            
            
            </div>
            <Footer />
        </>
    )
}
export default Admission