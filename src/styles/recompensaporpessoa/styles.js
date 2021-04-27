import styled from 'styled-components';

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    
`;

export const Container = styled.div`
    height: 150px;
    width: 400px;
    background: #202024;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    margin-top: 40px;
`;

export const Inputt = styled.input`
    width: 320px;
    height: 35px;
    border-radius: 3px;
    border: none;
    outline: none;
    background: #000;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
    text-indent: 10px;
`;

export const DivInvisible = styled.div`
    background: #000;
    border-radius: 3px;
    display: flex;
    align-items: center;
    padding-left: 10px;
`;

export const Buttonn = styled.button`
    width: 100px;
    height: 35px;
    background: #7B2CBF;
    margin-top: 20px;
    border: none;
    cursor: pointer;
    outline: none;
    border-radius: 3px;
    color: #fff;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Grid = styled.div`
    max-width: 80%;
    height: 430px;
    display: grid;
    grid-template-columns: 200px;
    grid-template-rows: 410px;
    grid-auto-flow: column;
    grid-column-gap: 10px;
    margin-top: 20px;
    overflow-y: hidden;
`;
