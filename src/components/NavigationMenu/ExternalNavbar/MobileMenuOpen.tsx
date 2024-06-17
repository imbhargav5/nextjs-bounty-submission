'use client';

import { Menu } from 'lucide-react';
import { useContext } from 'react';
import { MobileMenuContext } from './MobileMenuContext';

export function MobileMenuOpen() {
  const { setMobileMenuOpen } = useContext(MobileMenuContext);
  return (
    <Menu
      onClick={() => setMobileMenuOpen((prev) => !prev)}
      className="hover:cursor-pointer lg:hidden -mr-2"
    />
  );
}
