import { Search as SearchIcon } from '@mui/icons-material';
import { InputBase, Box, styled } from '@mui/material';

const Component = styled(Box)`
    color:#FFF;
    display:flex;
    align-items:center;
    position:relative;
    top:7px;
    background-color:#F0F2FE;
    border-radius:10px;
    width:96%;
    margin:0 auto;
`

const Icon = styled(Box)`
position:absolute;
    height:100%;
    color:#919191;
    top:5px;
    left:10px;
`

const SearchField = styled(InputBase)`
    padding-left:40px;
`

const Search = () => {
    return (
        <Component>
            <Icon>
                <SearchIcon />
            </Icon>
            <SearchField placeholder='search or start new chat' />
        </Component>

    );
};

export default Search;