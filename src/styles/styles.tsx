import styled, { StyledComponentBase } from 'styled-components';
import { colors } from '../core/constants';

const ContainerFull = styled.div`
background-color: ${colors.primary};
width: 100%;
height: 100vh;
`

const FelxFullCenter = styled.div`
background-color: ${colors.primary};
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`

export { ContainerFull, FelxFullCenter }