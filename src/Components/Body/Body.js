import React, { useState } from 'react'
import './Body.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'

function Body() {
    const [bill,setBill]=useState(0)
    const [tips,setTips]=useState([])
    const [name,setName]=useState('')
    const [percent,setPercent]=useState(0)
    const handleSelect=(e)=>{
        setPercent(e)
    }
    const calculateTip=()=>{
        const tip=(bill*percent)/100
          setTips([...tips,{num:tip,name:name}])
          
    }
    const [totalNum,setTotalNum]=useState(0)
    const [sumTip,setSumTip]=useState(0)
    const tipTotal=()=>{
         setTotalNum(tips.length)
         let sum=0
         var amount = tips.map(value => value.num);
         for(let i=0;i<amount.length;i++){
             sum+=amount[i]
         }
        setSumTip(sum)

    }
    return (
        <div className='mainbody'>
            <div className='entry'>
                <h2 className="enter-bill">Enter Your Bill Amount</h2>
                <input value={bill} onChange={(e)=>setBill(e.target.value)} type='text' id='type' className='input' placeholder='Enter Bill Amount Here'/>
            </div>
            <div className="border1"></div>
            <div className="customer">
              <h2 className="inline">How Was The Service</h2>
             <div className='form'>
                 <div className="drop">
             <DropdownButton  title="Select Service" id="dropdown-menu-align-right" onSelect={handleSelect}>
              <Dropdown.Item eventKey="20">Excellent - 20%</Dropdown.Item>
              <Dropdown.Item eventKey="10">Quite Good - 10%</Dropdown.Item>
              <Dropdown.Item eventKey="5">Not Soo Good - 5%</Dropdown.Item>
            </DropdownButton>
                 </div>
                <input value={name} onChange={(e)=>setName(e.target.value)} type="text" id='customer' className='customer-field' placeholder='Customer Name' />  
                <button className="switch" onClick={calculateTip}>Add Customer</button>
             </div>

             <h2>Customer List</h2>
            {
             tips.map((value)=>{
             return(<div className="customer-list">
                 <ul>
                     <li>
                     {value.name}&nbsp;You got tip of {value.num} Rupees
                     </li>
                 </ul>
             </div>)
            })
            }
             

            </div>
            <div className="calculate">
                <button className="switch" id='calculate_btn' onClick={tipTotal}>Calculate Tip & Customer</button>
            </div>
            <div className="table">
                <table className='table-class'>
                    <tr>
                        <th>Total Customer</th>
                        <th>Tip Amount</th>
                    </tr>
                    <tr>
                        <td>{totalNum}</td>
                        <td>{sumTip}</td>
                    </tr>    
                </table>

            </div>
        
        </div>
    )
}
export default Body
