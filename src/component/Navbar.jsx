import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems
} from '@headlessui/react';

import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Dashboard', to: '/' },
  { name: 'Team', to: '/team' },
  { name: 'Projects', to: '/projects' },
  {name: 'Calender', to: '/calender'},
  {name: 'Products' , to: '/productlist'}
  
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Navbar() {
  return (
    <Disclosure
      as="nav"
      className="relative bg-blue-800 after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-white/10"
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">

          {/* Mobile Menu Button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white">
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          {/* Logo + Desktop Nav */}
          <div className="flex flex-1 items-center justify-center sm:justify-start">
            <NavLink to="/" className="flex items-center">
              <img
                alt="Logo"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 cursor-pointer"
              />
            </NavLink>

            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.to}
                    className={({ isActive }) =>
                      classNames(
                        isActive
                          ? 'bg-gray-950/50 text-white'
                          : 'text-gray-300 hover:bg-white/5 hover:text-white',
                        'rounded-md px-3 py-2 text-sm font-medium'
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:pr-0">
            <button className="rounded-full p-1 text-gray-400 hover:text-white">
              <BellIcon className="size-6" />
            </button>

            {/* Profile Menu */}
            <Menu as="div" className="relative ml-3">
              <MenuButton className="flex rounded-full">
                <img
                  alt="user"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e"
                  className="size-8 rounded-full"
                />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-48 bg-gray-800 text-gray-300 rounded-md shadow-md">
                <MenuItem><a className="block px-4 py-2 hover:bg-white/5">Your profile</a></MenuItem>
                <MenuItem><a className="block px-4 py-2 hover:bg-white/5">Settings</a></MenuItem>
                <MenuItem><a className="block px-4 py-2 hover:bg-white/5">Sign out</a></MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <DisclosurePanel className="sm:hidden px-2 pt-2 pb-3">
        {navigation.map((item) => (
          <DisclosureButton
            key={item.name}
            as={NavLink}
            to={item.to}
            className={({ isActive }) =>
              classNames(
                isActive
                  ? 'bg-gray-950/50 text-white'
                  : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium'
              )
            }
          >
            {item.name}
          </DisclosureButton>
        ))}
      </DisclosurePanel>
    </Disclosure>
  );
}
