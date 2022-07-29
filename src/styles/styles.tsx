import styled, { StyledComponentBase } from 'styled-components';
import { colors } from '../core/constants';

const ContainerFull = styled.div`
background-color: ${colors.primary};
width: 100%;
height: 100vh;
`;

const FelxFullCenter = styled.div`
background-color: ${colors.primary};
width: 100%;
height: 100vh;
display: flex;
justify-content: center;
align-items: center;
`;

const CardLogin = styled.form`
margin-left: 20px;
margin-right: 20px;
z-index: 2;
padding: 50px;
display: flex;
flex-direction: column;
background: rgba( 255, 255, 255, 0.25 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 10px );
-webkit-backdrop-filter: blur( 10px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );
`;

const SubmitButton = styled.input`
border-radius: 20px;
display: flex;
justify-self: center;
margin-top: 20px;
background-color: ${colors.primary};
width: 100px;
height: 40px;
border-width: 0px;
color: white;
justify-content: center;
font-size: 17px;
font-weight: bold;

`;

const Adorno = styled.div`
 width: 250px;
 height: 250px;
 border-radius: 50%;
 position: absolute;
 top: 50px;
 left: 300px;
 background-color: ${colors.blue};
`



export { ContainerFull, FelxFullCenter, CardLogin, SubmitButton, Adorno }