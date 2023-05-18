import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Avatar } from './styles';

export function Profile(){
    return(
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft />
                </Link>
            </header>

            <Form>
                <Avatar>
                    <img src="https://github.com/webberchagas.png" alt="Foto do usuário" />
                    
                    <label htmlFor="avatar">
                        <FiCamera/>
                        <input id='avatar' type="file" />
                    </label>
                </Avatar>

                <Input 
                    placeholder="Nome"
                    icon={FiUser}
                    type="text"
                />

                <Input 
                    placeholder="E-mail"
                    icon={FiMail}
                    type="text"
                />

                <Input 
                    placeholder="Senha atual"
                    icon={FiLock}
                    type="password"
                />

                <Input 
                    placeholder="Nova senha"
                    icon={FiLock}
                    type="password"
                />

                <Button title='Salvar'/>

            </Form>


        </Container>
    );
}
