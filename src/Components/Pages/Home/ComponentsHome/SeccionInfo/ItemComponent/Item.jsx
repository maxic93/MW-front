
import { Container, H3, ContainerImg } from "./itemComponentStyle"

const Item = ({name, img, i}) => {

  return (
    <Container>
        <ContainerImg>
            <img src={img} alt="" />
            <H3>{name}</H3>
        </ContainerImg>
        
    </Container>
  )
}

export default Item