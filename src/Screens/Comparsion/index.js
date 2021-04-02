import React,{useState} from 'react'
import Footer from '../../Components/Footer'
import Header from '../../Components/Header'
import HeaderText from '../../Components/HeaderText'
import SelectItem from '../../Components/SelectItem'

const Univeristy_DATA = [
    {id:1,name:"DUET",fee:"30k",semester:"annual",hostel:"none"},
    {id:2,name:"MUET",fee:"28k",semester:"semester",hostel:"yes"},
    {id:3,name:"UIT",fee:"50k",semester:"semester",hostel:"yes"},
    {id:4,name:"KIET",fee:"60k",semester:"semester",hostel:"yes"}
]


const Camparsion = (props) => {
    const [state,setState] = useState({
        first_id:"",
        second_id:""
    })
    const handleChange = (e) =>{
        let {name, value} = e.target;
        setState({
            ...state,
          [name]: value,
        
        });
        
        }
    return (
        <>
        <Header />
    <div className="comparision">
        <div className="comparisionHeader">
            <HeaderText 
                headingLeft="Compare" 
                headingRight="Institutes" 
                paragraph="Narrow down your favourite institutes and compare them side by side with our built-in tools"
            />
        </div>
        {console.log(state)}
        <div className="comparsion-items">
            <SelectItem />
            <div className="comparision-item">
                <h3>
                    Second University
                </h3>
                <select name="second_id" onChange={handleChange}>
                    {Univeristy_DATA.map((item)=>{
                        return(
                            <option id={item.id}>
                                {item.name}
                            </option>
                        )
                    })}
                </select>
            </div>
        </div>
        <div className="comparsion-boxes">
        {(state.second_id ||state.first_id)&&
        <div className="compare-Box">
            <h2>
                <span style={{color:'rgb(240,240,240)'}}>Name: </span>{Univeristy_DATA.find((item)=>state.first_id===item.name)?.name}
            </h2>
            <h3>
                Fees: {Univeristy_DATA.find((item)=>state.first_id===item.name)?.fee}
            </h3>
            <h3>
                Fee Cycle: {Univeristy_DATA.find((item)=>state.first_id===item.name)?.semester}
            </h3>
            
            <h3>
                Hostel Facility: {Univeristy_DATA.find((item)=>state.first_id===item.name)?.hostel}
            </h3>
        </div>}

        {state.second_id&&
        <div className="compare-Box">
            <h2>
                <span style={{color:'rgb(240,240,240)'}}>Name: </span>{Univeristy_DATA.find((item)=>state.second_id===item.name).name}
            </h2>
            <h3>
                Fees: {Univeristy_DATA.find((item)=>state.second_id===item.name).fee}
            </h3>
            <h3>
                Fee Cycle: {Univeristy_DATA.find((item)=>state.second_id===item.name).semester}
            </h3>
            
            <h3>
                Hostel Facility: {Univeristy_DATA.find((item)=>state.second_id===item.name).hostel}
            </h3>
        </div>}
        </div>
    </div>
    <Footer/>
    </>
    )
}
export default Camparsion