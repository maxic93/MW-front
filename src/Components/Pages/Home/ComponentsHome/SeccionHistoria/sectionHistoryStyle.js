import styled from 'styled-components';

export const Section = styled.section`
width: 100%;
padding: 20px;
height: 860px;
background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
background-image: url("https://s1.best-wallpaper.net/wallpaper/m/1808/Mountains-hills-sunset-birds-art-picture_m.jpg");
@media (max-width: 768px) {
    padding: 5px;
}
`
export const Container = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
        flex-wrap: wrap;
`
export const Info = styled.div`
color: #fff;
width: 65%;
background: transparent;
position: relative;
display: flex;
align-items: center;
justify-content: center;
padding: 220px;
border-radius: 4px;
margin: 10px;
&::before {
	content:'';
	position: absolute;
    top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.8);
  border-radius: 15px;

}
@media (max-width: 768px) {
    
}
`

export const ContainerInfo = styled.div`
    position: absolute;
    padding: 50px;
    letter-spacing: 4px; 
    font-family: 'Acme';
    line-height: 200%;
    font-size: 1.3em;
    @media (max-width: 768px) {
        font-size: .8em;
        padding: 10px;
    }
`
export const Titulo = styled.h2`
text-align: center;
font-size: 2.5em;
font-family: 'Josefin Sans', sans-serif;
font-weight: 700;   
margin-bottom: 15px;
position: relative;
`
export const Img = styled.div`
width: 35%;
height: 400px;
margin: 10px;
display: flex;
align-items: center;
justify-content: center;
img {
    height:420px;
    max-width: 100%;
  }
  animation-name: boomerang;
  animation-duration: 3s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  @keyframes boomerang {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(50px);
    }
    100% {
      transform: translateY(0);
    }
  }
`


