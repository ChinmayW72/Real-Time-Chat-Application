import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//components
import ChatDialogue from './chats/ChatDialogue';
import LoginDialogue from './account/LoginDialogue';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`;

const Header = styled(AppBar)`
    background-color: #00A884;
    height: 125px;
    box-shadow: none;
`;
    
const LoginHeader = styled(AppBar)`
    background: #00bfa5;
    height: 200px;
    box-shadow: none;
`;

const Messenger = () => {
    const { account } = useContext(AccountContext);
    
    return (
        <Component>
            {
                account ? 
                <>
                    <Header>
                      hbnab
                        <Toolbar></Toolbar>
                    </Header>
                    <ChatDialogue />
                </>
                :
                <>
                    <LoginHeader>
                      dSA
                        <Toolbar></Toolbar>
                    </LoginHeader>
                    <LoginDialogue />
                </>
            }
        </Component>
    )
}

export default Messenger;