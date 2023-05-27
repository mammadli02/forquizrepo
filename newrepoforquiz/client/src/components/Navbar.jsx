import React from 'react'
import { Link } from 'react-router-dom'
import './Api.css'
const Navbar = () => {
  return (
<>
<ul style={{display:'flex', justifyContent:'space-around', padding:'20px 150px', backgroundColor:'blue'}}>
    <li style={{listStyle:'none'}}>
        <Link to='/' className='link' >HOME </Link>
    </li>
    <li style={{listStyle:'none'}}>
        <Link to='/add'  className='link'>ADD </Link>
    </li>
</ul>
</>  )
}

export default Navbar