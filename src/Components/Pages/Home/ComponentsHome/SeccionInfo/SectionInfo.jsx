import { Section } from "./infoStyle"
import Item from "./ItemComponent/Item"
import { info } from "./infoText"
import Despcripcion from "./DespcripcionComponent/Despcripcion"


const SectionInfo = () => {
  return (
    <Section>
        {info.map((item, i) => <Item name={item.name} img={item.img} key={item.name} index={i}/>)}
      <Despcripcion/>
    </Section>
  )
}

export default SectionInfo