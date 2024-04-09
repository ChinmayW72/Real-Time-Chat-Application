import React, { useState, } from 'react';
import { MoreVert } from '@mui/icons-material';
import { Menu, MenuItem } from '@mui/material';


// const MenuOption = styled(MenuItem)`
//     font-size: 14px
//     padding: 15px 60px 5px 24px;
//     color: #4A4A4A;
// `;

const HeaderMenu = ({setOpenDrawer}) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };
//   const toggleDrawer = () => {
//     setOpenDrawer(true);
// }

  return (
    <>
      <MoreVert onClick={handleClick} />
      <Menu
        id="basic-menu"
        anchorEl={open}
        keepMounted
        open={Boolean(open)}
        onClose={handleClose}
        getcontentanchore1={null}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={() => { handleClose(); setOpenDrawer(true);}}>Profile</MenuItem>
        
      </Menu>
    </>
  );
};

export default HeaderMenu;
