import { styled } from "styled-components"

export const Container = styled.div`
color: #f5f5f5;
width: 45%;
max-width: 400px;
background: transparent;
position: relative;
&::before {
    content:'';
	position: absolute;
        top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: rgba(0,0,0,0.4);
`
export const ContainerTitulos = styled.div`
position: relative;
	width: 100%;
	height: 60px;
	display: flex;
    align-items: center;
    gap: 5px;
	box-shadow: 0px 15px 10px -13px #000;  
	
	button {
		border-style: none;
    padding: 20px;
		font-size: 1.1em;
		background: transparent;
		color: #f5f5f5;
		cursor: pointer;
	}
`