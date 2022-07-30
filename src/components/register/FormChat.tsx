import { useState, FormEventHandler } from 'react';
import { ContentFormChat, ImageAdmin, ContentForm, InputRegister, SubmitButton, ResponseUser } from '../../styles/styles';
import admin_test from '../../assets/images/admin_test.jpg';
import { DataUser, DataContact, Cuestions } from '../../interfaces/intrfaces';

interface Props {
    cuestion: string;
    item: Cuestions;
    isReponse: boolean;
    type: number;
    focuse: boolean;
    handleResponse: (item: Cuestions, id: number) => void;
}

export default function FormChat(props: Props) {
    const { cuestion, type, isReponse, focuse, handleResponse, item } = props;

    const [birthdays, setBirthdays] = useState<string>('');

    const [email, setEmail] = useState<string>('');
    const [phone, setPhone] = useState<string>('');

    const [nombre, setNombre] = useState<string>('');
    const [apellidoMaterno, setApellidoMaterno] = useState<string>('');
    const [apellidoPaterno, setApellidoPaterno] = useState<string>('');
    const [segundoNombre, setSegundoNombre] = useState<string>('');


    const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
        event.preventDefault();

        const data = {
            nombre: nombre,
            email: email,
            apellido_materno: apellidoMaterno,
            apellido_paterno: apellidoPaterno,
            segundo_nombre: segundoNombre,
            fecha_nacimiento: birthdays,
            telefono: phone
        };

        item.isResponse = true;
        item.focuse = true;
        
        if (type === 0) {
            item.responce = `${nombre} ${segundoNombre} ${apellidoPaterno} ${apellidoMaterno}`;
        };

        if (type === 1) {
            item.responce = birthdays;
        };

        if (type === 2) {
            item.responce = `${email} ${phone}`;
        };

        handleResponse(item, type);
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
                                                type="date"
                                                placeholder='Fecha de Nacimiento'
                                                required
                                                value={birthdays}
                                                onChange={(event) => setBirthdays(event.currentTarget.value)}
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
                                case 2:
                                    return (
                                        <>
                                            <InputRegister
                                                type="email"
                                                placeholder='Correo electronico'
                                                name='email'
                                                required
                                                value={email}
                                                onChange={(event) => setEmail(event.currentTarget.value)}
                                            />
                                            <InputRegister
                                                type="tel"
                                                placeholder='Telefono calular'
                                                name='phone'
                                                required
                                                value={phone}
                                                onChange={(event) => setPhone(event.currentTarget.value)}
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
