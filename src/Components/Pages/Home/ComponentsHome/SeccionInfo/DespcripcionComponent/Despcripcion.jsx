import { Container, icon, ContainerInfo } from "./DespcripcionStyle"
import VerifiedIcon from '@mui/icons-material/Verified';

const Despcripcion = () => {
  return (
    <Container>
       <ContainerInfo>
        <h2>CONSIGUE TU MONSTRUO Y EMPIEZA A GANAR CRYPTOS</h2>
        <p><VerifiedIcon  sx={icon}/>  Consigue tu monstruo en el marketplace.</p>
        <p><VerifiedIcon sx={icon}/>  Incorpora un habitat de la misma clase de tu monstruo.</p>
        <p><VerifiedIcon sx={icon}/>  Deja que tu monstruo farme MonsterWorld Cryptos</p>
        <p><VerifiedIcon sx={icon}/>  Empieza a entrenarlo para la Aventura y PvP</p>
        </ContainerInfo> 
    </Container>
  )
}

export default Despcripcion