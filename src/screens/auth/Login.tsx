import { useState } from 'react'
import useAuth from '../../hooks/useAuth';
import { ContainerFull, FelxFullCenter, CardLogin, SubmitButton, Adorno } from '../../styles/styles';
import TextInput from '../../components/TextInput';
import { colors } from '../../core/constants';
import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
    const { signIn, isLogged } = useAuth();

    const [password, setPassword] = useState<string>('');
    const [email, setEmail] = useState<string>('');

    return (
        <ContainerFull>
            <div className='icon_svg_rigth' >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill={colors.red} d="M23.9,-41C30.5,-37.7,35,-30.2,33.4,-22.7C31.8,-15.2,24,-7.6,30.7,3.8C37.3,15.3,58.3,30.5,60.5,39C62.7,47.5,46,49.1,32.8,46.9C19.5,44.6,9.8,38.4,-1.5,41.1C-12.8,43.7,-25.7,55.2,-35.4,55.5C-45.2,55.7,-52,44.8,-60.4,33.7C-68.7,22.6,-78.6,11.3,-71.1,4.4C-63.5,-2.6,-38.5,-5.2,-25.9,-8.9C-13.3,-12.6,-13,-17.4,-10.8,-23.2C-8.5,-29,-4.3,-35.7,2.2,-39.6C8.7,-43.4,17.4,-44.2,23.9,-41Z" transform="translate(100 100)" />
                </svg>
            </div>

            <FelxFullCenter >
                <div>
                    <Adorno />
                    <CardLogin onSubmit={() => { }} >

                        <h2>Login</h2>
                        <TextInput
                            labelValue='Email'
                            type="email"
                            placeholder='miemail@email.com'
                            value={email}
                            onChange={(event) => setEmail(event.currentTarget.value)}
                        />
                        <TextInput
                            labelValue='Password'
                            type="password"
                            value={password}
                            onChange={(event) => setPassword(event.currentTarget.value)}
                        />
                        <div>
                            <Link to='/register' className='link' >
                                <h5>registrate</h5>
                            </Link>
                        </div>

                        <SubmitButton
                            type="submit"
                            value="submit"
                        />

                    </CardLogin>
                </div>

            </FelxFullCenter>

            <div className='icon_svg_left' >
                <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill={colors.green}
                        d="M23.2,-31.8C36.1,-22.6,56.8,-23.9,66.3,-16.4C75.9,-8.9,74.3,7.4,64.8,16.3C55.3,25.2,38,26.9,25.9,28.5C13.8,30.1,6.9,31.8,-4.4,37.9C-15.8,44,-31.5,54.5,-40.3,51.8C-49.1,49.1,-50.9,33.1,-56.5,17.9C-62.1,2.6,-71.5,-11.8,-70.5,-25.4C-69.6,-39.1,-58.3,-51.8,-44.8,-60.9C-31.3,-69.9,-15.6,-75.2,-5.2,-67.9C5.1,-60.7,10.3,-41,23.2,-31.8Z"
                        transform="translate(100 100)" />
                </svg>
            </div>
        </ContainerFull>
    );
};
