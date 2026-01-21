import { Slot } from 'expo-router';
import { SignUpProvider } from './context/SignUpContext';

export default function Layout() {
  return (
    <SignUpProvider>
      <Slot />
    </SignUpProvider>
  );
}
