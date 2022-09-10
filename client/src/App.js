import { GoogleOAuthProvider } from '@react-oauth/google';
import Messenger from './components/Messenger';

function App() {

  const clientId = "462416745771-ls6pbhgr2i7tnaj8uc5takv3607jhrs0.apps.googleusercontent.com";

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Messenger />
    </GoogleOAuthProvider>

  );
}

export default App;
