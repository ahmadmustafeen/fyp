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


const SignUp = (props) => {
    return (
        <div className="login">
            <div className="login-inner">
                <div className="login_left">
                    <h1>
                        Create a New Account
                    </h1>
                    <p>
                        Create a new account or
                    </p>
                    <Link to="/">
                        <p>Login with your Existing Account</p>
                    </Link>

                </div>
                <div className="login_right">
                    <HeaderText headingLeft="Create a " headingRight="New Account"/>
                    <InputWithTitle title="Email" placeholder="engr.ahmadmustafeen@gmail.com" onChange={(e) => console.log(e.target.value)} />
                    <InputWithTitle title="Password" secureEntry placeholder="********" onChange={(e) => console.log(e.target.value)} />
                    <div class="login_right_button">
                        <button>
                            <Link to="/" style={{ color: 'white' }}>Already have an Account?</Link>
                        </button>
                        <button>
                            <Link to="/" style={{ color: 'white' }}>Register</Link>
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
export default SignUp