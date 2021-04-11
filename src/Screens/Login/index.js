import React from 'react'
import { Link } from 'react-router-dom'
import HeaderText from '../../Components/HeaderText'
import InputWithTitle from '../../Components/InputWithTitle'

const InputWithLabel = (props) => {
    const { label, name, value } = props
    return (
        <div className="inputWithLabel">
            <h4>{label}</h4>
            <input name={name} />
        </div>)
}


const Login = (props) => {
    return (
        <div className="login">
            <div className="login-inner">
                <div className="login_left">
                    <h1>
                        Login
                    </h1>
                    <p>
                        Login into your existing account or
                    </p>
                    <Link to="signup">
                        <p>Create a New Account</p>
                    </Link>

                </div>
                <div className="login_right">

                    <HeaderText headingLeft="Welcome to "headingRight="Site Title"/>
                    <InputWithTitle title="Email" placeholder="engr.ahmadmustafeen@gmail.com" onChange={(e) => console.log(e.target.value)} />
                    <InputWithTitle title="Password" secureEntry placeholder="********" onChange={(e) => console.log(e.target.value)} />
                    <div class="login_right_button">
                    <button>
                            <Link to="signup" style={{color:'white'}}>Create New Account</Link>
                        </button>
                        <button>
                            <Link to="home"  style={{color:'white'}}>Login</Link>
                        </button>
                    </div>
                </div>
            </div>

            {/* <div className="login-inner">
            <h2>Site Title</h2>
            <form style={{width:'60%'}}>
            <InputWithLabel label="Email" name="" value=""  />
            <InputWithLabel label="Password" name="" value= ""/>
           
            <button style={{marginTop:40,borderRadius:100,width:200,height:40}}>  <a href="./home" >Login</a></button>
          
            </form>
        </div>*/}
        </div>
    )
}
export default Login