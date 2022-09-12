import { useContext } from 'react';
import { AppBar, Toolbar, styled, Box } from '@mui/material';
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';
import { AccountContext } from '../context/AccountProvider';

const Component = styled(Box)`
    height:100vh;
    background:#DCDCDC;
`

const Header = styled(AppBar)`
    height:75px;
    box-shadow:none;
`

const LoginHeader = styled(AppBar)`
    height:250px;
    box-shadow:none;
`

const Messenger = () => {

    const { account } = useContext(AccountContext);

    return (
        <Component>
            {
                account ?

                    <>
                        <Header>
                            <Toolbar>

                            </Toolbar>
                        </Header>

                        <ChatDialog />
                    </>
                    :
                    <>

                        <LoginHeader>
                            <Toolbar>

                            </Toolbar>
                        </LoginHeader>
                        <LoginDialog />
                    </>
            }

        </Component>
    );
};

export default Messenger;