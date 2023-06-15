import { styled } from "styled-components";


export const HeaderStyle = styled.header`

    width: 100%;

    height: 80px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    background-color: white;

    img {
        width: 200px;
        margin-left: 30px;
    }

    .DivA {
        width: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
    }

    a {
        color: blue;
        text-decoration: none;
        margin: 0 25px;
    }

`