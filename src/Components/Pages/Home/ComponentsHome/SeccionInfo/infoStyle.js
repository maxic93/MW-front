import { styled } from "styled-components";


export const Section = styled.section`
width: 100%;
padding: 90px;
display: flex;
justify-content: space-around;
align-items: center;
position: relative;
flex-wrap: wrap;
gap: 90px;
background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://w0.peakpx.com/wallpaper/67/935/HD-wallpaper-game-nature-scenery-game-sky-original-nature.jpg");
    &::before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
`