import React from 'react'

const InputWithLabel = (props) => {
    const {label,name,value} = props
    return(  
    <div className="inputWithLabel">
        <h4>{label}</h4>
        <input name={name}/>
    </div>)
}


const Login = (props) => {
    return (
    <div className="login">
        <div className="login-inner">
            <h2>Site Title</h2>
            <form style={{width:'60%'}}>
            <InputWithLabel label="Email" name="" value=""  />
            <InputWithLabel label="Password" name="" value= ""/>
           
            <button style={{marginTop:40,borderRadius:100,width:200,height:40}}>  <a href="./home" >Login</a></button>
            {/* </a> */}
            </form>
        </div>
    </div>
    )
}
export default Login