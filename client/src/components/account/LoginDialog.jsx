import { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";

const Component = styled(Box)`
    display:flex;
    margin:56px;
`

const Title = styled(Typography)`
    font-size:24px;
`

const dialogStyle = {
    height: "100vh",
    marginTop: "12%",
    width: "60vw",
    maxWidth: "100vw",
    boxShadow: "none",
};



const LoginDialog = () => {

    const { setAccount } = useContext(AccountContext);

    const onLoginSuccess = (response) => {
        const decoded = jwt_decode(response.credential);
        setAccount(decoded);
    };

    const onLoginError = (response) => {
        console.log(response);
    };

    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }} hideBackdrop={true}>
            <Component>
                <Box>
                    <Title>To use Chat on your computer:</Title>
                    <List>
                        <ListItem>1. Open Chat on your phone</ListItem>
                        <ListItem>2. Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box>
                    <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginError} />
                </Box>
            </Component>
        </Dialog>
    );
};

export default LoginDialog;