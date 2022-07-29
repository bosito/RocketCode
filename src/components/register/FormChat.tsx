import { useState, FormEventHandler } from 'react';
import { ContentFormChat, ImageAdmin, ContentForm, InputRegister, SubmitButton } from '../../styles/styles';
import admin_test from '../../assets/images/admin_test.jpg';
import { DataUser, DataContact, Cuestions } from '../../interfaces/intrfaces';

interface Props {
    cuestion: string;
    isReponse: boolean;
    type: number;
    focuse: boolean;
    handleResponse: (item: Cuestions) => void;
}

export default function FormChat(props: Props) {
    const { cuestion, type, isReponse, focuse, handleResponse } = props;

    const [birthdays, setBirthdays] = useState<string>('');
    const [dataContact, setDataContact] = useState<DataContact>({ email: '', phone: '' });

    const [nombre, setNombre] = useState('');
    const [apellidoMaterno, setApellidoMaterno] = useState('');
    const [apellidoPaterno, setApellidoPaterno] = useState('');
    const [segundoNombre, setSegundoNombre] = useState('');


    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const data: DataUser = {
            nombre: nombre,
            apellido_materno: apellidoMaterno,
            apellido_paterno: apellidoPaterno,
            segundo_nombre: segundoNombre
        };

        console.log('data -->', data);

    };

    if (!focuse) {
        return <></>
    };

    return (
        <ContentFormChat>
            <ImageAdmin src={admin_test} alt='imagen del admin' />
            <ContentForm>
                <h3>{cuestion}</h3>
                <form onSubmit={handleSubmit} className='form__fromChat' >
                    {
                        (() => {
                            switch (type) {
                                case 0:
                                    return (
                                        <>
                                            <InputRegister
                                                type="text"
                                                placeholder='Nombre'
                                                id='nombre'
                                                value={nombre}
                                                onChange={(event) => setNombre(event.currentTarget.value)}
                                            />
                                            <InputRegister
                                                type="text"
                                                placeholder='Segundo Nombre'
                                                id='segundo_nombre'
                                                value={segundoNombre}
                                                onChange={(event) => setSegundoNombre(event.currentTarget.value)}
                                            />
                                            <InputRegister
                                                type="text"
                                                placeholder='Apellido Paterno'
                                                id='apellido_paterno'
                                                value={apellidoPaterno}
                                                onChange={(event) => setApellidoPaterno(event.currentTarget.value)}
                                            />
                                            <InputRegister
                                                type="text"
                                                placeholder='Apellido Materno'
                                                id='apellido_materno'
                                                value={apellidoMaterno}
                                                onChange={(event) => setApellidoMaterno(event.currentTarget.value)}
                                            />

                                            {
                                                isReponse ?
                                                    null
                                                    :
                                                    <SubmitButton
                                                        type="submit"
                                                        value="Continuar"
                                                    />
                                            }
                                        </>
                                    );
                                case 1:
                                    return (
                                        <>
                                            <InputRegister
                                                type="text"
                                                placeholder='Fecha de Nacimiento'
                                                value={birthdays}
                                                onChange={(event) => setBirthdays(event.currentTarget.value)}
                                            />
                                        </>
                                    );
                                case 2:
                                    return (
                                        <>
                                            <InputRegister
                                                type="email"
                                                placeholder='Correo electronico'
                                                name='email'
                                                value={dataContact.email}
                                                onChange={(event) => setDataContact((state) => state = { ...state, [event.currentTarget.name]: event.currentTarget.value })}
                                            />
                                            <InputRegister
                                                type="tel"
                                                placeholder='Telefono calular'
                                                name='phone'
                                                value={dataContact.phone}
                                                onChange={(event) => setDataContact((state) => state = { ...state, [event.currentTarget.name]: event.currentTarget.value })}
                                            />
                                        </>
                                    );
                                default:
                                    return <></>
                            }
                        })()
                    }
                </form>
            </ContentForm>



        </ContentFormChat>
    );
};
