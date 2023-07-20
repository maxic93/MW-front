import { styled } from "styled-components";


export const Container = styled.div`
padding: 30px;
    width: 80%;
    flex-direction: column;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    position: relative;
    &::before {
        content:'';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(0,0,0,0.7);
        border-radius: 25px;
    }
`
export const ContainerInfo = styled.div`
width: 100%;
    position: relative;
    color: #f5f5f5;
    h2 {
        padding: 10px;
        font-size: 1.9em;
        font-family: 'Acme';
        text-align: center;
        margin: 7px;
    }
    p {
        font-size: 1.8em;
        display: flex;
    align-items: center;
    gap: 8px;
    padding: 6px;
    margin-top: 6px;
margin-bottom: 6px;
    }
`
export const icon = {
    fontSize: "1.2em",
    color: "#07AB60"
}