import { useContext } from 'react';
import { Box, styled, Typography } from "@mui/material";
import { AccountContext } from "../../context/AccountProvider";


const ImageContainer = styled(Box)`
    display:flex;
    justify-content:center;
`

const Image = styled('img')({
    height: "200px",
    width: "200px",
    borderRadius: "50%",
    padding: "25px 0"
});

const BoxWrapper = styled(Box)`
    background:#FFF;
    padding:12px 30px 2px;
    box-shadow:0 1px 3px rgba(0,0,0,0.08);

    & :first-of-type{
        color:#607EAA;
        font-size:13px;
        font-weight:200;
    }

    & :last-child{
        margin:14px 0;
    }
`

const DescriptionBoxWrapper = styled(Box)`
    & :first-of-type{
        font-size:14px;
        color:#8696a0;
        margin:15px 20px 28px 20px;
    }
`

const Profile = () => {

    const { account } = useContext(AccountContext);

    return (
        <>
            <ImageContainer>
                <Image src={account.picture} />
            </ImageContainer>
            <BoxWrapper>
                <Typography>Your Name</Typography>
                <Typography>{account.name}</Typography>
            </BoxWrapper>
            <DescriptionBoxWrapper>
                <Typography>This is not your username or pin. This name will be visible to your WhatsApp contacts.</Typography>
            </DescriptionBoxWrapper>
            <BoxWrapper>
                <Typography>About</Typography>
                <Typography>{account.email}</Typography>
            </BoxWrapper>
        </>
    );
};

export default Profile;