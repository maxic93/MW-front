import { ContainerCard, ContainerTitle, ContainerImg, ContainerPrice, ContainerStat, Stat } from "./cardMonstruoStyle"
import './cardMonster.css'
import { useEffect } from "react"

const CardMonstruo = ({name, id, tipo, img, price, ataque, defensa, hp, velocidad, clase}) => {
  
  
    const saludar = () => alert(`${name} dice: ¡¡HOLA PERRITA!!`)
 

  return (
    <ContainerCard className={`active-card ${clase}`} onClick={saludar}>
        <ContainerTitle>
            <h4>{name}</h4>
            <span className={tipo}>{`#${id}`}</span>
        </ContainerTitle>
        <ContainerImg className={name} >
            <img src={img} alt="" />
        </ContainerImg>
        <ContainerPrice><span>$</span>{price}</ContainerPrice>
        <ContainerStat>
            <Stat><img src="https://i.postimg.cc/T33bn3fm/sword-icon-png-9.png" alt="" /><p>{ataque}</p></Stat>
            <Stat><img src="https://i.postimg.cc/kXc8Vb3q/defend-icon-0.png" alt="" /><p>{defensa}</p></Stat>
            <Stat><img src="https://i.postimg.cc/5988VrsH/life-icon-13.png" alt="" /><p>{hp}</p></Stat>
            <Stat><img className="speed" src="https://i.postimg.cc/g053zb9h/shoe-icon-12.png" alt="" /><p>{velocidad}</p></Stat>
            <Stat><div className={`img-${clase}`}></div></Stat>
            <Stat><div className={`img-${tipo}`}></div></Stat>
        </ContainerStat>
    </ContainerCard>
  )
}

export default CardMonstruo