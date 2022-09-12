import { Drawer, Typography, Box, styled } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';

const drawerStyle = {
    left: "20px",
    top: "33px",
    height: "95%",
    width: "25vw",
    boxShadow: "none"
};

const Header = styled(Box)`
    background:#008069;
    color:#FFF;
    height:107px;
    display:flex;
    & > svg,& > p{
        margin-top:auto;
        font-weight:600;
        padding:15px;
    } 
`

const InfoDrawer = ({ open, setOpen }) => {

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Drawer
            open={open}
            onClose={handleClose}
            PaperProps={{ sx: drawerStyle }}
            style={{ zIndex: 1500 }}
        >
            <Header>
                <ArrowBack onClick={() => { handleClose() }} />
                <Typography>Profile</Typography>
            </Header>
        </Drawer>
    );
};

export default InfoDrawer;