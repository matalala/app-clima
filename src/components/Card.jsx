import React from 'react';
import {  NavLink } from 'react-router-dom';
import Style from './css/Card.module.css'


export default function Card(props) {
  // acá va tu código

  var stil
  var id='/ciudad/'+ props.id
  console.log(id)
  if(props.img==="09d"){
     stil=Style.contenedor1
  }else  stil=Style.contenedor2
  return <div className={stil}>
  <button className={Style.boton} onClick={()=>{
    props.onClose(props.unico)
  }}>x</button>
    <NavLink to={id} className={Style.NavLink}>  
  <h3 className={Style.title}>{props.name}</h3>
   </NavLink>
  <div className={Style.dataCon}>
    <div className={Style.data}>
      <h6>min</h6>
      <span className={Style.span}>{props.min}°</span>
    </div>
    <div className={Style.data}>
      <h6>max</h6>
      <span className={Style.span}>{props.max}°</span>
    </div>
    <img className={Style.data} alt="" src={'https://openweathermap.org/img/wn/'+props.img+'@2x.png'}/>
  </div>
  </div>
};