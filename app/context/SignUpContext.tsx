import React, { createContext, useContext, useState } from "react";

export type UserRole = "WORKER" | "COMPANY";

type SignUpData = {
    role: UserRole;

    name: string;
    email: string;
    password: string;

    cpf: string;
    birthDate: string;
    phone: string;

    zipCode: string;
    street: string;
    number: string;
    complement: string;
    city: string;

    skills: string[];
    documentUrl: string;
    photoUrl: string;

    companyName: string;
    companyLocation: string;
};

type SignUpContextType = {
    data: Partial<SignUpData>;
    updateData: (newData: Partial<SignUpData>) => void;
    resetData: () => void;
};

const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

export function SignUpProvider({ children }: { children: React.ReactNode }) {
    const [data, setData] = useState<Partial<SignUpData>>({});

    const updateData = (newData: Partial<SignUpData>) => {
        setData((prev) => ({
            ...prev,
            ...newData,
        }));
    };

    const resetData = () => {
        setData({});
    };

    return (
        <SignUpContext.Provider value={{ data, updateData, resetData }}>
            {children}
        </SignUpContext.Provider>
    );
}

export function useSignUp() {
    const context = useContext(SignUpContext);

    if (!context) {
        throw new Error("useSignUp must be used within a SignUpProvider");
    }

    return context;
}
