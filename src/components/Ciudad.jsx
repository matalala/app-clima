import React from "react";
import { useParams } from "react-router-dom";
import s from './css/Ciudad.module.css'

export default function Ciudad(props) {
    let ciudadId= useParams()
      let city=props.city(ciudadId.ciudadId)
    console.log(city)
    return(
            city.map(p=>{
                console.log(p)
            var a =Object.entries(p)
                return(
                    
                       <div className={s.conten}>

                        {a.map(([key,value])=>{
                        return (
                        <div className={s.Ciudad}>
                            <h1 className={s.h1} >{key}</h1>
                            <h1 className={s.h1} >{value}</h1>
                        </div>
                        )
                    })}
                    </div> 

                  
                    
                )
            
        })
        
    )
    
}