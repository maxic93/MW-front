import { styled } from "styled-components"

export const Container = styled.div`
width: 100%;
background: transparent;
position: relative;
padding: 40px;
display: flex;
align-items: center;
    justify-content: center;
flex-wrap: wrap;
gap: 20px;
&::before {
    content:'';
	position: absolute;
        top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.6);
`