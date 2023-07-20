import { MonstruosProvider } from "../../../Contexts/MonstruosContexts/monstruosContexts"
import FilterComponent from "./FiltroComponent/FilterComponent"
import { Section } from "./MarketplaceStilos/marketplacestyles"
import ShowComponent from "./showComponente/ShowComponent"

const Marketplace = () => {
  return (
    <MonstruosProvider>
       <Section>
        <FilterComponent/>
        <ShowComponent/>
    </Section>
    </MonstruosProvider>
  )
}

export default Marketplace