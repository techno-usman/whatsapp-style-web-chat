import { Drawer, Typography, Box, styled } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import Profile from './Profile';

const drawerStyle = {
    width: "26vw",
    boxShadow: "none"
};

const Header = styled(Box)`
    background:#607EAA;
    color:#FFF;
    height:107px;
    display:flex;
    & > svg,& > p{
        margin-top:auto;
        font-weight:600;
        padding:15px;
    } 
`

const Component = styled(Box)`
    background:#ededed;
    height:100%;
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
            <Component>
                <Profile />
            </Component>
        </Drawer>
    );
};

export default InfoDrawer;