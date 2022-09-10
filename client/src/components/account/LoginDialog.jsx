import { Dialog, Box, Typography, List, ListItem } from "@mui/material";

const dialogStyle = {
    height: "100vh",
    marginTop: "12%",
    width: "60vw",
    boxShadow: "none",

};

const LoginDialog = () => {
    return (
        <Dialog open={true} PaperProps={{ sx: dialogStyle }}>
            <Box>
                <Box>
                    <Typography>To use WhatsApp on your computer:</Typography>
                    <List>
                        <ListItem>Open WhatsApp on your phone</ListItem>
                        <ListItem>Tap Menu or Settings and select Linked Devices</ListItem>
                        <ListItem>Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
                <Box></Box>
            </Box>
        </Dialog>
    );
};

export default LoginDialog;