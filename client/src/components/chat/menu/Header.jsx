import { Box, styled } from '@mui/material';
import { useContext } from 'react';
import { AccountContext } from '../../../context/AccountProvider';
import { Chat as MessageIcon } from '@mui/icons-material';
import HeaderMoreVertMenu from './HeaderMoreVertMenu';

const Component = styled(Box)`
    height:44px;
    background:#ededed;
    padding:8px 16px;
    display:flex;
    align-items:center;
    justify-content:space-between;
`

const ProfilePic = styled('img')({
    width: "40px",
    height: "40px",
    borderRadius: "50%"
});

const IconsWrapper = styled(Box)`
    &  > *{
        padding:8px;
        color:#434343;
        cursor:pointer;
    };

    & :first-child{
        font-size:22px;
        margin-right:8px;
    }
`

const Header = () => {
    const { account } = useContext(AccountContext);

    return (
        <Component>
            <ProfilePic src={account.picture} alt="dp" />
            <IconsWrapper>
                <MessageIcon />
                <HeaderMoreVertMenu />
            </IconsWrapper>
        </Component>
    );
};

export default Header;