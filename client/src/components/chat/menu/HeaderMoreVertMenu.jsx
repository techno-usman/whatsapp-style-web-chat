import { useState } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem, styled } from '@mui/material';


const MenuOption = styled(MenuItem)`
    font-size:14px;
    color:#4A4A4A;
    padding:10px 40px;
`

const HeaderMoreVertMenu = () => {

    const [open, setOpen] = useState(null);


    const handleClose = () => {
        setOpen(null);
    };

    const handleClick = (e) => {
        setOpen(e.currentTarget);
    };

    return (
        <>
            <MoreVert onClick={handleClick} />

            <Menu
                id="basic-menu"
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "center"
                }}
                transformOrigin={{
                    vertical: "top",
                    horizontal: "right"
                }}

            >
                <MenuOption onClick={handleClose}>Profile</MenuOption>
            </Menu>
        </>
    );
};

export default HeaderMoreVertMenu;



