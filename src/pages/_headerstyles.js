import styled from 'styled-components';

export const Main = styled.div`
    height: 70px;
    width: 100%;
    background: #000;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const TextButton = styled.p`
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Fredoka One",Arial, Helvetica, sans-serif;
`;

export const Button = styled.button`
    height: 30px;
    width: 80px;
    border: none;
    border-radius: 4px;
    background-color: #7B2CBF;
    margin-right: 100px;
`;

export const Logo = styled.img`
    height: 40px;
    width: 120px;
    background-color: #fff;
    margin-left: 100px;
`;

export const Link = styled.a`
    font-size: 12px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 50px;
    font-family: "Fredoka One", Arial, Helvetica, sans-serif;
`;

export const Links = styled.div`
    width: auto;
    height: 70px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 50px;
`;