import { Dialog, Box, styled } from "@mui/material";
import Menu from './menu/Menu';
import EmptyChat from "./chatbox/EmptyChat";


const dialogStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw",
    boxShadow: "none",
};

const Component = styled(Box)`
    display:flex;
`

const ChatMenu = styled(Box)`
    width:25vw;
    min-width:200px;
`

const ChatBox = styled(Box)`
    width:75vw;
`

const ChatDialog = () => {
    return (
        <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
            <Component>
                <ChatMenu>
                    <Menu />
                </ChatMenu>
                <ChatBox>
                    <EmptyChat />
                </ChatBox>
            </Component>
        </Dialog>
    );
};

export default ChatDialog;