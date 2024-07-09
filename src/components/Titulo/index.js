import styled from "styled-components";

export const Titulo = styled.h2`
    width: 100%;
    text-align: ${props => props.alinhamento || 'center'};
    font-size: ${props => props.tamanhoFonte || '18px'};
    padding: 30px 0;
    color: ${props => props.cor || '#000'};
    margin: 0;
`;

