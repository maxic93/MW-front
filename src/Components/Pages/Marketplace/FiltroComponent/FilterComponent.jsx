import { Container, ContainerTitulos } from "./filterComponentStyle"
import "./filtersStyle.css"

const FilterComponent = () => {
  return (
    <Container>
        <ContainerTitulos>
        <button className="active">MONSTRUOS</button>
        <button>HABITATS</button>
        </ContainerTitulos>
    </Container>
  )
}

export default FilterComponent