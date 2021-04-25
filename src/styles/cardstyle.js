import styled from 'styled-components'

export const Main = styled.div`
    height: 300px;
    width: 200px;
    background: #FF9115;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
`

export const Titulo = styled.p`
    font-size: 22px;
    color: #000;
    text-align: center;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Descricao = styled.p`
    font-size: 16px;
    color: #000;
    text-align: center;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    width: 90%;
`;

export const Icon = styled.img`
    height: 100px;
    width: 60%;
`;