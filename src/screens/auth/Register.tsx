import { useState, useCallback } from 'react';
import { ContainerFull, HeaderRegister, Title, SubTitle, BodyRegister } from '../../styles/styles';
import FormChat from '../../components/register/FormChat';
import { Cuestions } from '../../interfaces/intrfaces';

const cuestions: Cuestions[] = [
  { cuestion: '¿Cuál es tu nombre?', isResponse: false, focuse: true },
  { cuestion: '¿Cuál es tu fecha de nacimiento?', isResponse: false, focuse: false },
  { cuestion: 'Datos de contacto', isResponse: false, focuse: false }
];

export default function Register() {
  const [cuestionsList, setCuestionsList] = useState<Cuestions[]>(cuestions);

  const handletest = () => {

  };

  const handleResponse = useCallback((item: Cuestions) => {
    //setCuestionsList()
  }, [cuestionsList]);

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
        {
          cuestionsList.map((item, index) => {
            return (
              <FormChat
                key={index.toString()}
                focuse={item.focuse}
                cuestion={item.cuestion}
                type={index}
                isReponse={item.isResponse}
                handleResponse={handleResponse}
              />
            )
          })
        }
      </BodyRegister>
    </ContainerFull>
  );
};
