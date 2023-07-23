import React from 'react'
import { NavLink } from 'react-router-dom'
function Sidebar() {
  return (
    <aside className='sidebar '>
        <div className='sidebar-up'>
            <img className='logo' src="./public/img/Logo.png" alt="Logo" />
            <p>Kitaplar, bizim için gizli bir bahçedir.</p>
        </div>
        <ul className='sidebar-content'>
            <p>Menu</p>
            <li>
                <NavLink>
                <i className="uil uil-analysis"/>
                    <span>En Cok Satanlar</span>        
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <i className="uil uil-books"/>
                    <span>Kitaplar</span>
                </NavLink>
            </li>
 
            <li>
                <NavLink>
                    <i className="uil uil-pen"/>
                    <span>Yazarlar</span>
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <i class="uil uil-share-alt"/>
                    <span>Yayıncalar</span>
                </NavLink>
            </li>
            <li>
                <NavLink>
                    <i class="uil uil-percentage"/>
                    <span>İndirimler</span>
                </NavLink>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar