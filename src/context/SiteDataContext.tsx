import { pagesData, siteData } from "@/data";
import { PagesData, SiteData } from "@/types";
import React, { ReactNode, createContext, useContext } from "react";

interface SiteDataContextValue {
    siteData: SiteData,
    pagesData: PagesData
}

export const SiteDataContext = createContext<SiteDataContextValue | undefined>(undefined);

interface SiteDataContextProviderProps {
    children: ReactNode;
}

export const SiteDataContextProvider = ({children}: SiteDataContextProviderProps) => {
    return (
        <SiteDataContext.Provider value={{siteData, pagesData}}>
            {children}
        </SiteDataContext.Provider>
    )
}

export const useDataContext = () => {
    const context = useContext(SiteDataContext);
    if (!context) {
      throw new Error('useDataContext must be used within a SiteDataContextProvider');
    }
    return context;
};