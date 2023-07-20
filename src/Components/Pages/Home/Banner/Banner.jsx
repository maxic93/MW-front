import Container from "@mui/material/Container"
import { banner, contenido } from "./bannerStyle"

const Banner = () => {
  return (
    <Container maxWidth="fluid" sx={banner}>
        <Container maxWidth="fluid" sx={contenido}>
            <h1>Monster World</h1>
            <p>Coming soon ...</p>
            <span>2023</span>
        </Container>
    </Container>
  )
}

export default Banner