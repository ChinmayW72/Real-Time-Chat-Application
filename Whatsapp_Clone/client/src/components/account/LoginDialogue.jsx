import React, { useContext } from "react";
import { Dialog, Box, Typography, List, ListItem, styled } from "@mui/material";
import { GoogleLogin } from "@react-oauth/google";
import jwt_decode from "jwt-decode";
import { AccountContext } from "../../context/AccountProvider";
import { useNavigate } from "react-router-dom";
import { addUser } from "../../service/api";

const Component = styled(Box)`
  display: flex;
`;

const Container = styled(Box)`
  padding: 56px 0 56px 56px;
`;

const Title = styled(Typography)`
  font-size: 26px;
  margin-bottom: 25px;
  color: #525252;
  font-family: Segoe UI, Helvetica Neue, Helvetica, Lucida Grande, Arial,
    Ubuntu, Cantarell, Fira Sans, sans-serif;
  font-weight: 300;
`;

const StyledList = styled(List)({
  "& > li": {
    padding: 0,
    marginTop: 15,
    fontSize: 18,
    lineHeight: "28px",
    color: "#4a4a4a",
  },
});

const dialoguestyle = {
  height: "96%",
  width: "70%",
  marginTop: "12%",
  maxWidth: "100%",
  maxHeight: "100%",
  boxShadow: "none",
};

const LoginDialogue = () => {
  const { setAccount } = useContext(AccountContext);
  const navigate = useNavigate();

  const onLoginSuccess = async (res) => {
    if (!res || !res.credential) {
      console.error("Login success but no credential received:", res);
      return;
    }

    try {
      const decoded = jwt_decode(res.credential);
      console.log(decoded);
      setAccount(decoded);
      await addUser(decoded);
      navigate("/chat");
    } catch (error) {
      console.error("Error processing login success:", error);
    }
  };

  const onLoginFailure = (res) => {
    console.error("Login failed:", res);
    // Handle login failure, if needed.
  };

  return (
    <Dialog open={true} PaperProps={{ sx: dialoguestyle }} hideBackdrop={true}>
      <Component>
        <Box>
          <Title>To use WhatsApp on your computer</Title>
          <StyledList>
            <ListItem>1. Open WhatsApp on your phone</ListItem>
            <ListItem>2. Tap Menu Settings</ListItem>
            <ListItem>3. Point your phone to this screen to scan the code</ListItem>
          </StyledList>
        </Box>
        <Container>
          <GoogleLogin onSuccess={onLoginSuccess} onError={onLoginFailure} />
        </Container>
      </Component>
    </Dialog>
  );
};

export default LoginDialogue;
