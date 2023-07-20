import { styled } from "styled-components";


export const ContainerCard = styled.div`
padding: 10px;
position: relative;
color: #fff;
position: relative;
    width: 340px;
    min-width: 300px;
    border: solid 1px #454346;
    border-radius: 10px;
    cursor: pointer;
`
export const ContainerTitle = styled.div`
font-family: 'Acme';
font-size: 1.6em;
    width: 100%;
    display: flex;
  justify-content: space-between;
  padding: 4px;
  span {
    padding: 4px 10px 4px 10px;
    border-radius: 10px;
    font-family: 'Roboto Slab';
    font-size: .6em;
  }
`
export const ContainerImg = styled.div`
    width: 100%;
    height: 38%;
    display: flex;
    align-items: center;
    flex-direction: column;
    img {
        width: 220px;
        height: 220px;
    }
`

export const ContainerPrice = styled.div`
display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 7px;
    margin: 7px;
    font-size: 2em;
    span {
        color: #6CB617;
    }
`
export const ContainerStat = styled.div`
    width: 100%;
    display: flex;
    align-item: center;
    justify-content: center;
    flex-wrap: wrap;
    padding: 20px;
    gap: 12px;
    position: relative;
    &::before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
        border-radius: 5px;
`
export const Stat = styled.div`
display: flex;
width: 100px;
height: 60px;
position: relative;
img {
    width: 35px;
    height: 35px;
}
p {
    font-size: 1.7em;
     margin-left: 5px;
}

`