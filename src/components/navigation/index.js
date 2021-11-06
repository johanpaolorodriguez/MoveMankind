import React, { Fragment, useContext } from "react";
import { NavLink, Link } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import { AuthUserContext } from "../Session";
import SignoutButton from "../SignOut";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import logo from "../../assets/move_mankind_logo.svg";
import Search from "../Search";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navigation = () => {
  const authUser = useContext(AuthUserContext);
  return (
    <Disclosure as="nav" className="bg-primary">
      {({ open }) => (
        <Fragment>
          <div className="px-2 mx-auto max-w-7xl | sm:px-6 | lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              {/* Mobile menu button */}
              <div className="absolute inset-y-0 left-0 flex items-center | sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center p-2 text-gray-400 rounded-md hover:tesxt-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              {/* Logo */}
              <div className="flex-1 flex item-center justify-center | sm:items-stretch sm:justify-start">
                <Link to={"/"}>
                  <div className="flex items-center flex-shrink-0">
                    <img
                      src={logo}
                      alt="Move Mankind Logo"
                      className="block w-auto h-8 | lg:hidden"
                    />
                    <img
                      src={logo}
                      alt="Move Mankind Logo"
                      className="hidden h-8 w-auto | lg:block"
                    />
                  </div>
                </Link>
              </div>
              {/* Nav Links */}
              <div className="hidden | sm:block sm:ml-6">
                <div className="flex space-x-4">
                  {ROUTES.ITEMS.map((item) => {
                    const render = (
                      <NavbarLink
                        to={item.href}
                        key={item.name}
                        name={item.name}
                        exact
                      />
                    );
                    if (!authUser && !item.restricted) {
                      return render;
                    }

                    if (authUser) {
                      if (item.restricted) {
                        return render;
                      }
                    }
                    return null;
                  })}

                  {/* Algolia Search Component */}
                  <Search />
                </div>
              </div>

              {/* Profile dropdown */}
              {authUser && (
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="flex text-sm bg-gray-800 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="w-8 h-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 w-48 py-1 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {/* <Menu.Item>
                            {({ active }) => (
                              //TODO:ADD PROPER HREF ATTRBS.
                              <a
                                href="#"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item> */}

                      <Menu.Item>
                        <SignoutButton />
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              )}
            </div>
          </div>

          {/* Mobile menu panel */}
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {ROUTES.ITEMS.map((item) => {
                const render = (
                  <NavPanelLink
                    to={item.href}
                    key={item.name}
                    name={item.name}
                    exact
                  />
                );
                if (!authUser && !item.restricted) {
                  return render;
                }

                if (authUser) {
                  if (item.restricted) {
                    return render;
                  }
                }
                return null;
              })}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
};

const NavbarLink = (props) => (
  <NavLink
    className="px-3 py-2 text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
    activeClassName="bg-gray-700"
    {...props}
  >
    <span className="flex-shrink-0">{props.name}</span>
  </NavLink>
);

const NavPanelLink = (props) => (
  <NavLink
    className="block px-3 py-2 text-base font-medium text-gray-300 rounded-md hover:bg-gray-700 hover:text-white"
    activeClassName="bg-gray-900 text-white"
    {...props}
  >
    <span className="flex-shrink-0">{props.name}</span>
  </NavLink>
);

export default Navigation;
