import { ContainerFull, HeaderRegister, Title, SubTitle, BodyRegister } from '../../styles/styles';
import FormChat from '../../components/register/FormChat';

const cuestions: string[] = ['¿Cuál es tu nombre?', '¿Cuál es tu fecha de nacimiento?', 'Datos de contacto'];

export default function Register() {
  return (
    <ContainerFull>
      <HeaderRegister>
        <Title>
          Formulario de registro
          <SubTitle>
            Responde las preguntas para realizar tu registro
          </SubTitle>
        </Title>
      </HeaderRegister>
      <BodyRegister>
        <FormChat cuestion='¿Cuál es tu nombre?' />

        <FormChat cuestion='¿Cuál es tu nombre?' />

        <FormChat cuestion='¿Cuál es tu nombre?' />

        <FormChat cuestion='¿Cuál es tu nombre?' />
        <FormChat cuestion='¿Cuál es tu nombre?' />
        <FormChat cuestion='¿Cuál es tu nombre?' />
        <FormChat cuestion='¿Cuál es tu nombre?' />
        <FormChat cuestion='¿Cuál es tu nombre?' />
        <FormChat cuestion='¿Cuál es tu nombre?' />
        <FormChat cuestion='¿Cuál es tu nombre?' />


      </BodyRegister>
    </ContainerFull>
  );
};
