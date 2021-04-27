import styled from 'styled-components';

export const Main = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Container = styled.div`
    height: 200px;
    width: 400px;
    background: #202024;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
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