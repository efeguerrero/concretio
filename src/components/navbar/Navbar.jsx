import { React, useRef, useState } from 'react';
import MenuIcon from './menuIcon/MenuIcon';

//Logo url in public and alt text
const logo = '/assets/images/institucional/logo-concretio-v2.png';
const logoAlt = 'Logo Concretio';

//Component Imports
import Link from './link/Link.jsx';
import Socials from './socials/Socials';

//links Import
import links from './links';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const refDrawer = useRef(null);
  const menuToggle = () => {
    refDrawer.current.classList.toggle('translate-x-[-100%]');
    setIsOpen((prev) => !prev);
    // document.body.classList.toggle('no-scroll');
  };

  return (
    <nav className="flex flex-col justify-between align-center mx-auto">
      <div class=" bg-white flex justify-between py-6 px-6 ">
        <img src={logo} alt={logoAlt} class="w-auto h-10" />
        <MenuIcon menuToggle={menuToggle} isOpen={isOpen} />
      </div>
      <div
        ref={refDrawer}
        className="bg-white h-screen flex flex-col pt-40 px-20 w-2/3 transition-all duration-500 ease-in-out ml-auto fixed left-[100%] "
      >
        <div className="flex flex-col align-center gap-6">
          {links.map((link) => {
            return (
              <Link
                url={link.url}
                linkName={link.name}
                menuToggle={menuToggle}
              />
            );
          })}
        </div>
        <div class="mt-8 w-max">
          <Socials />
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
