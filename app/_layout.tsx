import { Slot } from 'expo-router';
import { SignUpProvider } from './context/SignUpContext';
import { UserProvider } from './context/UserContext';
import * as SplashScreen from 'expo-splash-screen';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  useEffect(() => {
    // Hide splash screen immediately since we are using system fonts now
    SplashScreen.hideAsync();
  }, []);

  return (
    <UserProvider>
      <SignUpProvider>
        <Slot />
      </SignUpProvider>
    </UserProvider>
  );
}
