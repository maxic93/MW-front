import { styled } from "styled-components";


export const Container = styled.section`
background-image: url('https://p4.wallpaperbetter.com/wallpaper/69/767/665/video-games-genshin-genshin-impact-landscape-hd-wallpaper-preview.jpg'); 
    background-size: cover; 
    background-position: center; 
    background-attachment: fixed;
    top: 0; 
    left: 0; 
    width: 100%; 
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 100px;
    @media (max-width: 900px) {
        padding: 16px;
      }
`
export const ContainerInfo = styled.div`
width: 70%;
background: transparent;
position: relative;
box-shadow: 6px 10px 10px #333;
&::before {
    content:'';
	position: absolute;
        top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.6);
}
@media (max-width: 900px) {
    width: 100%;
  }
`
export const ContainerVisible = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
position: relative;
`
export const Elementos = styled.div`
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
`

export const Titulo = styled.h3`
font-family: 'Acme';
color: aliceblue;
text-align: center;
font-size: 2.8em;
padding: 16px;
`
export const Parrafo = styled.p`
color: aliceblue;
text-align: center;
font-size: 1.6em;
padding: 8px;
`
export const IconContainer = styled.div`
margin: 30px;
display: flex;
width: 100%;
padding: 40px;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
span {
    display: inline-block;
    width: 100%;
    height: 2px;
    background: linear-gradient(to right, transparent, #E5BF25, transparent);r
}
div {
    padding: 25px;
    display: flex;
align-items: center;
justify-content: center;
flex-wrap: wrap;
}
img {
    width: 100px;
    height: 110px;
    margin-left: 30px;
    margin-right: 20px;
}
`