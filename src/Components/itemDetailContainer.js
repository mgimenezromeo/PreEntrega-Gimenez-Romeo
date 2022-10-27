import ItemDetail from "./itemDetail";
import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Spinner from "./spinner";







   

function ItemDetailContainer() {
    const {libroID} = useParams();
    const [cartas, setCartas] = useState(<Spinner/>);
    const [loading, isLoading] = useState(true)

  //SIMULACION API
  const getItem = () => {
    let items = require("../Backend/eventos.json")
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(items)
            isLoading(false)
        }, 1000);
    })
  }


  useEffect(() => {
    async function fetchedItems(){
      const items = await getItem(); 
      setCartas(items)
    }

    fetchedItems()
  }, []);

// Implementar mock invocando a getItem() y utilizando el resolver then
 return(

    
        <div className="md:flex justify-start ml-10 h-[100vh] ">   
        {loading ? cartas : cartas
          .filter((libro) => libro.id.includes(libroID))
          .map((el)=>(

            <ItemDetail 
            key={el.id}
            nombre={el.nombre}
            img = {el.img}
            categoria = {el.categoria}
            detalle = {el.detalle}
            id={el.id}
            valor = {el.valor}
            stock= {el.stock}

            />
          ))}
            {

    }
      


        
        </div>

    );
     

  /* JSX que devuelva un ItemDetail (punto 2) */
}

export default ItemDetailContainer;