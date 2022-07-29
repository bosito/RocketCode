import styled from 'styled-components';
import { colors } from '../core/constants';

const ContainerFull = styled.div`
background-color: ${colors.primary};
width: 100%;
height: 100vh;
overflow: hidden;
position: relative;
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
`;

const HeaderRegister = styled.div`
display: flex;
flex-direction: row;
align-items: center;
padding-inline: 10px;
width: 100%;
height: 70px;
`;

const Title = styled.h2`
color: ${colors.title};
`;

const SubTitle = styled.p`
color: ${colors.title};
font-size: 0.9rem;
font-family: serif;
font-weight: 100;
`

const BodyRegister = styled.div`
display: flex;
flex-direction: column;
width: 100%;
height: 100%;
padding-left: 50px;
padding-right: 50px;
overflow-y: scroll;
background-color:${colors.secondary};
`

const ContentFormChat = styled.div`
display: flex;
flex-direction: row;
height: fit-content;
margin-bottom: 20px;
margin-top: 10px;
`

const ImageAdmin = styled.img`
width: 60px;
height: 60px;
background-color: gray;
border-radius: 50%;
size: cover;
margin-right: 10px;
`;

const ContentForm = styled.div`
display: flex;
flex-direction: column;
padding: 15px;
padding-left: 30px;
padding-right: 30px;
background-color: ${colors.blue};
`;

const InputRegister = styled.input`
width: 200px;
height: 20px;
margin-top: 10px;
margin-bottom: 5px;
padding: 5px;
`;

export {
    ContainerFull,
    FelxFullCenter,
    CardLogin,
    SubmitButton,
    Adorno,
    HeaderRegister,
    Title,
    SubTitle,
    BodyRegister,
    ContentFormChat,
    ImageAdmin,
    ContentForm,
    InputRegister
}