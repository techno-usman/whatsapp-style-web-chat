import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";

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

const onLoginSuccess = (response) => {
    const decode = jwt_decode(response.credential);
    console.log(decode);
};

const onLoginError = (response) => {
    console.log(response);
};

const LoginDialog = () => {
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
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