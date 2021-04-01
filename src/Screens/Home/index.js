import React from 'react'
import CarasoulComponent from '../../Components/Carasoul'
import Features from '../../Components/Features'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import ImageWithText from '../../Components/ImageWithText'
const Home = (props) => {
    return (
    
        <>
        <Header />
    <div >
        
        <CarasoulComponent/>
        <HeaderText 
            headingLeft="Compare" 
            headingRight="Universities" 
            paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
            buttonText="Continue" 
            onClickButton="compare"
         />
         <div style={{width:'80%',display:'flex',margin:'auto'}}>
         <ImageWithText 
            headingLeft="Information about"
            headingRight="Scholarships" 
            paragraph="All the available Scholarship under one flag so it will be easier to point out you interested one"
            buttonText="Continue" 
            onClickButton="scholarship"
            />
         </div>
         <Features />
         <HeaderText heading="Heading" 
        paragraph=""
         />
    </div>
    
    <Footer/>
    </>
    )
}
export default Home