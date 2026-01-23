import React, { createContext, useContext, useState } from 'react';

type User = {
    id: string;
    name: string;
    email: string;
    city?: string;
    skills?: string[];
    photoUrl?: string;
    createdAt?: string;
    role: 'WORKER' | 'COMPANY';
    // Add other fields as needed
};

type UserContextType = {
    user: User | null;
    setUser: (user: User | null) => void;
};

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
    const [user, setUser] = useState<User | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
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
