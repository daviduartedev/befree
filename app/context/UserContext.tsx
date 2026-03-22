import React, { createContext, useContext, useState } from 'react';

import { themes, Theme, workerTheme } from '../constants/theme';

type User = {
    id: string;
    name: string;
    email: string;
    city?: string;
    skills?: string[];
    photoUrl?: string;
    createdAt?: string;
    role: 'WORKER' | 'COMPANY';
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
    theme: Theme;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    const theme = user ? themes[user.role] : workerTheme;

    return (
        <UserContext.Provider value={{ user, setUser, theme }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
}
