import { icons, iconsClass } from "../../../../../DATA/dataIcons"
import { Container, ContainerInfo, Elementos, Titulo, Parrafo, IconContainer, ContainerVisible } from "./gameStyle"

const SectionGames = () => {
  return (
    <Container>
      <ContainerInfo>
        <ContainerVisible>
        <Elementos>
          <Titulo>Elementos</Titulo>
          <Parrafo>Cada Elemento tiene una ventaja y desventaja sobre los otros.</Parrafo>
          <IconContainer>
          <span></span>
          <div>{icons.map(item => <img src={item.url} alt={item.url} key={item.url}></img>)}</div>
            <span></span>
          </IconContainer>
        </Elementos>
        <Elementos>
          <Titulo>Classes</Titulo>
          <Parrafo>Hay cuatro clases en el juego que definden su rareza.</Parrafo>
          <IconContainer>
          <span></span>
          <div>{iconsClass.map(item => <img src={item.url} alt={item.url} key={item.url}></img>)}</div>
            <span></span>
          </IconContainer>
        </Elementos>
        </ContainerVisible>
      </ContainerInfo>
      </Container>
  )
}

export default SectionGames