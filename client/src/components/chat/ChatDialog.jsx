import { Dialog, Box } from "@mui/material";

const dialogStyle = {
    height: "100vh",
    width: "100vw",
    maxWidth: "100vw",
    boxShadow: "none",
};

const ChatDialog = () => {
    return (
        <Dialog open={true} hideBackdrop={true} PaperProps={{ sx: dialogStyle }}>
            <Box>
                <Box></Box>
                <Box></Box>
            </Box>
        </Dialog>
    );
};

export default ChatDialog;