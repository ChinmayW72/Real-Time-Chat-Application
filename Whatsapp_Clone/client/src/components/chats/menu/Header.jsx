import {useContext} from "react";
import { AccountContext } from '../../../context/AccountProvider';
import { Box, styled} from "@mui/material"
import { Chat as MessageIcon,HistoryToggleOff } from '@mui/icons-material';
import HeaderMenu from "./HeaderMenu";
import  InfoDrawer from "../../drawer/InfoDrawer"
import { useState } from "react";

const Component = styled(Box)`
    height:44px;
    background:#ededed;
    padding: 8px  150px;
    display:flex;
    align-items:center;


`
const Wrapper = styled(Box)`
  margin-left:auto; 
  margin-left:20px;
  padding:8px;
  colour:#013220;

`




const Image = styled('img')({
     height:40,
     width: 40,
     borderRadius : '50%',
    //  position: 'absolute', 
     top: 0, 
     right: '20px'
    })


const Header = () => {
  const [openDrawer,setOpenDrawer] = useState(false);

    const {account} = useContext (AccountContext);
    const toggleDrawer = () =>{
      setOpenDrawer(true);
    }
    
    return (
        
        <>
          <Component>
            <Image src = {account.picture} alt = "dp" onClick = {() => toggleDrawer()}/>
            <Wrapper>
              <MessageIcon/>
              <HeaderMenu setOpenDrawer = {setOpenDrawer}/>
              <HistoryToggleOff/>
            </Wrapper>
          </Component>
          <InfoDrawer open={openDrawer} setOpen={setOpenDrawer} />
        
        </>
    ) 
}

export default Header;