import { styled } from "styled-components"

export const Section = styled.section`
width: 100%;
padding: 120px;
display: flex;
justify-content: center;
position: relative;
background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("https://e0.pxfuel.com/wallpapers/8/261/desktop-wallpaper-dota-2-ursa-warrior.jpg");
    background-attachment: fixed;
    &::before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.3);
`

