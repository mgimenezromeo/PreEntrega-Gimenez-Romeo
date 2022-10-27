import React,{ useState, useEffect } from "react";
import Spinner from './spinner'
import Item from "./item";
import { useParams } from "react-router-dom";



export default function ItemList(){

  const [cartas, setCartas] = useState(<Spinner/>);
  const [loading, isLoading] = useState(false)
  const {categoria} = useParams();
  

  //SIMULACION API
  const listado = () => {
    let items = require("../Backend/eventos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(true)
        }, 2000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await listado(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);

  



    return ( 
        <div className="flex flex-wrap justify-start">
          {!loading ? cartas 
          : categoria ? cartas
          .filter((libro) => libro.categoria === categoria)
          .map((el)=>(

            <Item 
            key={el.id}
            nombre={el.nombre}
            calificacion={el.calificacion}
            autor={el.autor}
            img = {el.img}
            categoria = {el.categoria}
            reseña = {el.reseña}
            id={el.id}

            />
          ))
        : cartas
        .map((el)=>(

          <Item 
          key={el.id}
          nombre={el.nombre}
          calificacion={el.calificacion}
          autor={el.autor}
          img = {el.img}
          categoria = {el.categoria}
          reseña = {el.reseña}
          id={el.id}

          />
        ))
        }
        </div>

    );
}