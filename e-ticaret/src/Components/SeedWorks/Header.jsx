import React from 'react'
import { NavLink } from 'react-router-dom'

function Header({setSetings,settings}) {
    const toggleStatus =()=>{
        setSetings({...settings,toggle : !settings.toggle})
    }
  return (
    <nav className='navbar'>
        <div className='container'>
            <div className='nav-left'>
                <i className="uil uil-bars" onClick={toggleStatus}/>
                <span>Kitapların Gizli Bahçesi</span>
            </div>
                <ul className='nav-right'>
                    <li>
                        <NavLink to="/" >AnaSayfa</NavLink>
                    </li>

                    <li>
                        <NavLink to="/aboutus">Hakkimizda </NavLink>
                    </li>

                    <li>
                        <NavLink to="/communication" >İletişim</NavLink>
                    </li>
                    
                    <li>
                        <NavLink to="/cart" >Sepetim</NavLink>
                    </li>
                    <li>
                        <NavLink to="/account">Hesap</NavLink>
                    </li>
                </ul>
        </div>
    </nav>
  )
}

export default Header