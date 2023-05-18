import { RiShutDownLine } from 'react-icons/ri';

import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile to='/profile'>
                <img 
                    src="https://github.com/webberchagas.png" 
                    alt="foto usuário"  
                />

                <div>
                    <span>Bem-vindo</span>
                    <strong>Webber Chagas</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )
}
