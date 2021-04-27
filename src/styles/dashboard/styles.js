import styled from 'styled-components'

export const Main = styled.div`
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

`;

export const Titulo = styled.p`
    font-size: 50px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    margin-top: 100px;
`;

export const Grid = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: 250px 250px 250px;
    grid-template-rows: 150px 150px;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
`;

export const Card = styled.a`
    width: 250px;
    height: 150px;
    display: flex;
    flex-direction: column;
    border: none;
    outline: none;
    cursor: pointer;
`;

export const TituloCard = styled.p`
    font-size: 16px;
    color: #fff;
    height: 20%;
    width: 100%;
    text-align: center;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Image = styled.img`
    height: 80%;
    width: 100%;
`;