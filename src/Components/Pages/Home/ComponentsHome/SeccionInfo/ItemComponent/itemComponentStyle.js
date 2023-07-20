import { styled } from "styled-components";


export const Container = styled.div`
width: 350px;
height: 400px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
gap: 20px;


`
export const ContainerImg = styled.div`
position: absolute;
width: 360px;
height: 340px;
border-radius: 50%;
border: solid 3px #fff;
display: flex;
justify-content: center;
align-items: center;
img {
    width: 360px;
    height: 340px;
border-radius: 50%;
object-fit: cover;
}
`

export const H3 = styled.h3`
display: flex;
justify-content: center;
align-items: center;
width: 220px;
color: #f5f5f5;
font-size: 1.8em;
position: absolute;
bottom: -42px;
padding: 20px;
font-family: 'Acme';
border-radius: 10px; 
  background: linear-gradient(to top, #20D300, #000);

`