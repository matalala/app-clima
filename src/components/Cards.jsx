import React from 'react';
import Card from './Card';
import style from './css/Cards.module.css'

export default function Cards(props) {
  // acá va tu código
  // tip, podés usar un map
  
  return <div className={style.contenedor}>
   {/* {props.cities.map(p=>{
     return console.log(p)
    <Card max={p.main.temp_max}
     min={p.main.temp_min}
     name={p.name}
     img={p.weather[0].icon}
     onClose={() => alert(p.name)}
     />
   })} */}
   {props.cities.map(p=>{
      return <Card 
       max={p.max}
       min={p.min}
       img={p.img}
       id={p.id}
       key={Math.random()}
       unico={p.unico}
       name={p.name}
       onClose={props.onClose}
       />
     
   })}
  </div>
};