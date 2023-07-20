import { Container } from "./showComponentStyle"
import { useContext } from "react"
import { MonstruosContext } from "../../../../Contexts/MonstruosContexts/monstruosContexts"
import CardMonstruo from "./CardMonstruos/CardMonstruo"


const ShowComponent = () => {
    const {dataMonstruos} = useContext(MonstruosContext)
  

  return (
    <Container>
        {dataMonstruos.map(item => <CardMonstruo 
        key={item.id} 
        price={item.price} 
        name={item.name} 
        id={item.id} 
        tipo={item.Tipo} 
        ataque={item.Ataque}
        defensa={item.Defensa}
        hp={item.HP}
        velocidad={item.Velocidad}
        clase={item.clase}
        img={item.img}/>)}
    </Container>
  )
}

export default ShowComponent