import React from 'react'



const InputWithTitle = props => {

    const { title, placeholder, onChange,value, secureEntry } = props

    return (
        <div className="inputWithTitle">
            <h3>
                {title}
        </h3>
            <input placeholder={placeholder} value={value} onChange={onChange} secureEntry={secureEntry} />
        </div>
    )


}


export default InputWithTitle