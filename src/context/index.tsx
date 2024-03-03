import { ReactNode, createContext, useContext, useState } from 'react';

interface MwcContextType {
    heroImage: string;
}

const defaultContext : MwcContextType = {
    heroImage: ''
}

const MwcContext = createContext(defaultContext)

export function UseMwcContext() {
    return useContext(MwcContext)
} 

interface MwcProviderProp {
    children: ReactNode
}

export default function MwcProvider({ children } : MwcProviderProp) {

    const value = {
        heroImage: ''
    }

    return (
        <MwcContext.Provider value={value}>
            {children}
        </MwcContext.Provider>
    )
}