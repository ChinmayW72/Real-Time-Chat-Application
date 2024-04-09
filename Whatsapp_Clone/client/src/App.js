import Messenger from "./components/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./context/AccountProvider";

function App() {
  const clientId = '897567569937-etm8gvdmshut2pgmj9tdp75ac6oa08jp.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId = {clientId}>
      <AccountProvider>
      <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
