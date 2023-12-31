import { Fragment } from "react";
import React, { useState } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/solid";
import { Logo } from "../image/Image";

import { removeSession } from "../utils/LocalStorage";
import { useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar({ onValueChange, onDataChange }) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [inputValue, setInputValue] = useState("");

  const handleChange = (event) => {
    const newValue = event.target.value;
    onDataChange(newValue);
    setInputValue(newValue);
    onValueChange(newValue);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <Disclosure as="nav" className="bg-[#04413C]">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                {/* --------------- LOGO ------------------ */}
                <div className="flex flex-shrink-0 items-center">
                  <img className="h-10 w-auto" src={Logo} alt="Your Company" />
                </div>
                {/* --------------- SEARCH ------------------*/}
                <div className=" mx-auto">
                  <div className="relative flex items-center w-full h-8 rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
                    <div className="grid place-items-center h-full w-24 text-gray-300">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                      </svg>
                    </div>

                    <input value={inputValue} onChange={handleChange} className="peer h-full w-full outline-none text-sm text-gray-700 " type="text" id="search" placeholder="Search something.." />
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button type="button" className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">View notifications</span>
                  {/* <BellIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>

                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div>
                    <Menu.Button className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                      <span className="absolute -inset-1.5" />
                      <span className="sr-only">Open user menu</span>
                      <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
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
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" onClick={openModal} className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Your Profile
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a href="#" className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}>
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            onClick={() => {
                              removeSession();
                              navigate("/login");
                            }}
                            className={classNames(active ? "bg-gray-100" : "", "block px-4 py-2 text-sm text-gray-700")}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
                <div>
                  {/* Profile Image Upload Modal */}
                  {isModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center z-50">
                      <div className="bg-white w-96 p-4 rounded-lg shadow-md">
                        <div className="flex justify-end">
                          <button onClick={closeModal}>
                            <XIcon className="h-6 w-6 text-gray-600 cursor-pointer" />
                          </button>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">Upload Profile Image</h3>
                        {/* Add your image upload form here */}
                        {/* For example: */}
                        <input type="file" />
                        <button onClick={closeModal} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md">
                          Upload
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
