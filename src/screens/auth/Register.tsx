import { useState, useCallback, useEffect } from 'react';
import { ContainerFull, HeaderRegister, Title, SubTitle, BodyRegister, ResponseUser, CardAllInfo, Button } from '../../styles/styles';
import FormChat from '../../components/register/FormChat';
import { Cuestions } from '../../interfaces/intrfaces';

const cuestions: Cuestions[] = [
  { id: 1, cuestion: '¿Cuál es tu nombre?', isResponse: false, focuse: true, responce: '' },
  { id: 2, cuestion: '¿Cuál es tu fecha de nacimiento?', isResponse: false, focuse: false, responce: '' },
  { id: 3, cuestion: 'Datos de contacto', isResponse: false, focuse: false, responce: '' }
];

export default function Register() {
  const [cuestionsList, setCuestionsList] = useState<Cuestions[]>([]);

  useEffect(() => {
    setCuestionsList(cuestions);
  }, []);

  const handleResponse = useCallback((item_cuestion: Cuestions, type: number): void => {
    let current_list: Cuestions[] = [];

    current_list = cuestionsList.map((item, index, array) => {

      if (item.id === item_cuestion.id) {
        item.focuse = item_cuestion.focuse;
        item.isResponse = item_cuestion.isResponse;
        item.responce = item_cuestion.responce;

        if (array[type + 1]) {
          array[type + 1].focuse = true;
        };
      };

      return item;
    });

    setCuestionsList([...current_list]);
  }, [cuestionsList]);

  return (
    <ContainerFull>
      {
        cuestionsList.length === 0 ?
          null
          :
          <>

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
                    <>
                      <FormChat
                        key={index.toString()}
                        item={item}
                        focuse={item.focuse}
                        cuestion={item.cuestion}
                        type={index}
                        isReponse={item.isResponse}
                        handleResponse={handleResponse}
                      />
                      {
                        item.isResponse &&
                        <ResponseUser>
                          <p className='aling_self_center' >{item.responce}</p>
                        </ResponseUser>
                      }
                    </>

                  )
                })
              }

              {
                (() => {
                  if (cuestionsList[2].isResponse) {
                    return (
                      <CardAllInfo>
                        <Title>
                          ¿Tus datos estan bien?
                          <SubTitle>
                            Fecha de Nacimiento - {cuestionsList[1].responce}
                          </SubTitle>
                          <SubTitle>
                            Correo electronico y telefono - {cuestionsList[2].responce}
                          </SubTitle>
                          <SubTitle>
                            Nombre - {cuestionsList[0].responce}
                          </SubTitle>
                        </Title>

                        <Button onClick={() => { }} >
                          Continuar
                        </Button>

                        <Button onClick={() => {
                          setCuestionsList([]);
                          setTimeout(() => {
                            setCuestionsList(cuestions)
                          }, 0)
                        }}
                        >
                          Reiniciar
                        </Button>
                      </CardAllInfo>
                    )
                  }
                })()
              }
            </BodyRegister>
          </>
      }
    </ContainerFull>
  );
};
