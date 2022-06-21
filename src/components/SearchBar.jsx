import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './css/SerchBar.module.css'
//import cities from '../data'

export default function SearchBar(props) {
  // acá va tu código
  let apiKey="c8e7aa332c9048be7dd4be7b01a1f833"
  let [stado, setstado]= React.useState("")
 function actualizar(ciu){
   setstado(stado=ciu)
 }
 function ciudads(porp){
  fetch(`http://api.openweathermap.org/data/2.5/weather?q=${porp}&appid=${apiKey}&units=metric`)
  .then(r => r.json())
  .then((recurso) => {
    if(recurso.main !== undefined){
      const ciudad = {
        min: Math.round(recurso.main.temp_min),
        max: Math.round(recurso.main.temp_max),
        img: recurso.weather[0].icon,
        id: recurso.id,
        unico:Math.random(),
        wind: recurso.wind.speed,
        temp: recurso.main.temp,
        name: recurso.name,
        weather: recurso.weather[0].main,
        clouds: recurso.clouds.all,
        latitud: recurso.coord.lat,
        longitud: recurso.coord.lon
      };
      props.onBuscar([ciudad])
    } else {
      alert("Ciudad no encontrada");
    }
  });


}
  function click(){
    if(!stado)alert("ingresa una ciudad")
    else{
      ciudads(stado)
    actualizar("")
    }
  }
 return<div className={style.conten}>
   <input className={style.iput}
  placeholder="Ciudad..."
    onChange={(ev)=>{
   actualizar(ev.target.value)
   
 }}
 type="text" 
 value={stado}/>
    <NavLink to='/' className={style.LinkR}>
    <button className={style.boton} type="submit" onClick={click}>
    Agregar
    </button> 
    </NavLink>
    
  </div>
  
};