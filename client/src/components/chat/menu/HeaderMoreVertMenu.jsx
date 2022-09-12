import { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';


const MenuOption = styled(MenuItem)`
    font-size:14px;
    color:#4A4A4A;
    padding:10px 40px;
`

const HeaderMoreVertMenu = ({ setOpenDrawer }) => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    return (
        <>
            <MoreVert onClick={handleClick} />

            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}

            >
                <MenuOption onClick={() => { handleClose(); setOpenDrawer(true); }}>Profile</MenuOption>
            </Menu>
        </>
    );
};

export default HeaderMoreVertMenu;



