import styled from "styled-components";

const StyledInput = styled.input`
    background-color:#494949;
    border: none;
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    width: 90%;
    color: #D9D9D9;
    ::placeholder {
        color: #ffffff; /* Cor do placeholder */
        opacity: 1; /* Garante que a cor do placeholder seja aplicada */
    }
`;

export interface InputProps{
    placeholder?:string;
    onChange: any;
    value: string;
    name?: string;
}

export {
    StyledInput,
}