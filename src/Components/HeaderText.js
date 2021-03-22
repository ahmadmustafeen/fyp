import React from 'react'


const HeaderText = (props) => {
const {heading,paragraph,buttonText} = props
    return(
        <div className="HeaderText">
            <div className="HT-Heading">
               <h3>{heading}</h3> 
            </div>
            <div className="HT-Paragraph">
                <p>{paragraph}</p>
            </div>
            {buttonText&&<button>{buttonText}</button>}
        </div>
    )
}

export default HeaderText