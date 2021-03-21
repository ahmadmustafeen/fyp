import React from 'react'
import CarasoulComponent from '../../Components/Carasoul'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import ImageWithText from '../../Components/ImageWithText'
const Home = (props) => {
    return (
    
        <>
        <Header />
    <div>
        
        <CarasoulComponent/>
        <HeaderText heading="Heading" 
        paragraph="adad thais asdasd  adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa
        d adad thais asdasd         adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d adad thais asdasd 
        adfas asda s a s ds dasdas dasd as
        d a sd as d a sd asd sa d as d 
        sad  as d sa d sa        d "
         />
         <div style={{width:'80%',display:'flex',margin:'auto'}}>
         <ImageWithText heading="asdd" paragraph="adsadads"/>
         </div>
    </div>
    
    <Footer/>
    </>
    )
}
export default Home