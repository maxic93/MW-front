import Banner from "./Banner/Banner"
import SectionHistory from "./ComponentsHome/SeccionHistoria/SectionHistory"
import SectionInfo from "./ComponentsHome/SeccionInfo/SectionInfo"
import SectionGames from "./ComponentsHome/SectionGame/SectionGames"



const Home = () => {
  return (
    <>
    <Banner/>
    <SectionHistory/>
    <SectionInfo/>
    <SectionGames/>
    </>
  )
}

export default Home