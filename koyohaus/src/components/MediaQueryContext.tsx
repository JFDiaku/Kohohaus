import React, { createContext, useContext } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MediaQueryContextProps {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
}

const MediaQueryContext = createContext<MediaQueryContextProps | undefined>(undefined);

export const MediaQueryProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const isTablet = useMediaQuery("(max-width:1000px)");
  const isDesktop = useMediaQuery("(min-width:1025px)");

  return (
    <MediaQueryContext.Provider value={{ isMobile, isTablet, isDesktop }}>
      {children}
    </MediaQueryContext.Provider>
  );
};

export const useMediaQueryContext = () => {
  const context = useContext(MediaQueryContext);
  if (!context) {
    throw new Error("useMediaQueryContext must be used within a MediaQueryProvider");
  }
  return context;
};
