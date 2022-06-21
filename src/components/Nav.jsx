import React from "react"
import SearchBar from "./SearchBar.jsx"
import style from "./css/Nav.module.css"
import { NavLink } from "react-router-dom"
export default function Nav(props){
    return(
     <nav className={style.Nav}>
         <div className={style.div}> 
         <NavLink to='/' className={style.Active}>
         <span>inicio</span>
         </NavLink>
         <NavLink to='/about' className={style.Active}>
             <span>About</span>
         </NavLink>
        <SearchBar 
        className={style.buscador} 
        onBuscar={props.onBuscar}/>
         </div>
     </nav>
    )
}