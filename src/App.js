import Routers from './routes';
import Footer from './components/Footer';
import { CometChat } from '@cometchat-pro/chat';

import './App.css';
import { useEffect } from 'react';


function App() {
  const initializeApp = () => {
    const appSetting = new CometChat.AppSettingsBuilder()
      .subscribePresenceForAllUsers()
      .setRegion('eu')
      .build();
    CometChat.init('204621ac49c9243e', appSetting).then(
      () => {
        console.log("Initialization completed successfully");
      },
      error => {
        console.log("Initialization failed with error:", error);
      }
    );
  }
  useEffect(() => {
    initializeApp()
  }, [])
  return (
    <div>
      <Routers />
      <Footer />
    </div>
  );
}

export default App;
