'use client';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

type MobileMenuContextType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: Dispatch<SetStateAction<boolean>>;
};

export const MobileMenuContext = createContext<MobileMenuContextType>(
  {} as MobileMenuContextType,
);

export const MobileMenuProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <MobileMenuContext.Provider value={{ mobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};
