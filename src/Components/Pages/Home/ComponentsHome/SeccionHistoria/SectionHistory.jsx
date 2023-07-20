import { Section, Container, Info, ContainerInfo, Titulo,  Img } from "./sectionHistoryStyle"
import { historia } from "./textoHistoria"

const SectionHistory = () => {
  return (
    <Section>
      <Container>
        <Info>
          <ContainerInfo>
            <Titulo>PLAY + EARN</Titulo>
            {historia}
          </ContainerInfo>
        </Info>
        <Img>
          <img src="https://i.postimg.cc/0jXLzSLS/pngwing-com-3.png" alt="cristal" />
        </Img>
      </Container>
    </Section>
  )
}

export default SectionHistory