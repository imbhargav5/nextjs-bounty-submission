'use client';

import { Menu } from 'lucide-react';
import { useContext } from 'react';
import { MobileMenuContext } from './MobileMenuContext';


export function MobileMenuOpen() {
  const { setMobileMenuOpen } = useContext(MobileMenuContext);
  return (
    // <Menu
    //   onClick={() => setMobileMenuOpen((prev) => !prev)}
    //   className="hover:cursor-pointer lg:hidden -mr-2"
    // />
    <button className='lg:hidden block' onClick={() => setMobileMenuOpen((prev) => !prev)} >
      <svg width="27" height="27" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.6333 7.46666C2.6333 7.1537 2.88701 6.89999 3.19997 6.89999H28.8C29.1129 6.89999 29.3666 7.15373 29.3666 7.46666C29.3666 7.77959 29.1129 8.03333 28.8 8.03333H3.19997C2.88701 8.03333 2.6333 7.77962 2.6333 7.46666ZM2.6333 16C2.6333 15.687 2.88701 15.4333 3.19997 15.4333H28.8C29.1129 15.4333 29.3666 15.6871 29.3666 16C29.3666 16.3129 29.1129 16.5667 28.8 16.5667H3.19997C2.88701 16.5667 2.6333 16.313 2.6333 16ZM2.6333 24.5333C2.6333 24.2204 2.88704 23.9667 3.19997 23.9667H28.8C29.1128 23.9667 29.3666 24.2205 29.3666 24.5333C29.3666 24.8462 29.1128 25.1 28.8 25.1H3.19997C2.88704 25.1 2.6333 24.8462 2.6333 24.5333Z" fill="#F8FAFC" stroke="#F8FAFC" />
      </svg>


    </button>
  );
}
