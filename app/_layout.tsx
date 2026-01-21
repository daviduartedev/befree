import { Slot } from 'expo-router';
import { SignUpProvider } from './context/SignUpContext';
import { UserProvider } from './context/UserContext';

export default function Layout() {
  return (
    <UserProvider>
      <SignUpProvider>
        <Slot />
      </SignUpProvider>
    </UserProvider>
  );
}
