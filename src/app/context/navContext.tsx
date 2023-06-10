import React, { FC, PropsWithChildren, createContext, useState } from 'react';

type menuContextType = {
  isMenuOpen: boolean;
  toggleMenuMode: () => void,
}

export const menuContext = createContext<menuContextType>({
  isMenuOpen: true,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleMenuMode: () => {},
});


export const MenuContextProvider:  FC<PropsWithChildren> = ({ children }) => {
  const [isMenuOpen, toggleMenu] = useState(false);

  function toggleMenuMode() {
    toggleMenu(!isMenuOpen);
  }

  return (
    <menuContext.Provider value={{ isMenuOpen, toggleMenuMode }}>{children}</menuContext.Provider>
  );
};




