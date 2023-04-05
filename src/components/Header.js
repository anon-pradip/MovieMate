
import { Disclosure } from '@headlessui/react'
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid'
import { Bars3Icon, XMarkIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline'
import logo from "../assets/logo4.png"
import { Nav, NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function Header() {
  const [darkMode, setDarkMode] = useState(JSON.parse(localStorage.getItem("darkMode")) || false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
    localStorage.setItem("darkMode", JSON.stringify(darkMode))
  }, [darkMode])

  const activeClass = "inline-flex  items-center border-b-2 border-indigo-500 dark:text-white px-1 pt-1 text-sm font-medium text-gray-900"

  const inActiveClass = "inline-flex items-center border-b-2 border-transparent px-1 pt-1 text-sm font-medium text-gray-400 hover:border-gray-300 hover:text-gray-200"

  return (
    <Disclosure as="nav" className="bg-white shadow dark:bg-gray-900 dark:text-white">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex px-2 lg:px-0">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="hidden h-14 bg-white dark:bg-slate-400 rounded-full w-auto lg:block"
                    src={logo}
                    alt="Your Company"
                  />
                  <p className=' font-bold text-xl font-sans'>MovieMate</p>
                </div>
                <div className="hidden lg:ml-6 lg:flex lg:space-x-8">
                  <NavLink to="/"
                    className={({ isActive }) => isActive ? activeClass : inActiveClass}
                    end
                  >
                    Home
                  </NavLink>
                  <NavLink to="movies/popular"
                    className={({ isActive }) => isActive ? activeClass : inActiveClass}
                  >
                    Popular
                  </NavLink>
                  <NavLink
                    to="movies/top"
                    className={({ isActive }) => isActive ? activeClass : inActiveClass}
                  >
                    Top Rated
                  </NavLink>
                  <NavLink
                    to="movies/upcoming"
                    className={({ isActive }) => isActive ? activeClass : inActiveClass}
                  >
                    Upcoming
                  </NavLink>
                </div>
              </div>
              <div className="flex flex-1 items-center justify-center px-2 lg:ml-6 lg:justify-end">
                <button className='mr-2 rounded-md border border-slate-600 p-0.5 dark:bg-gray-800' onClick={() => setDarkMode(!darkMode)}>
                  {darkMode ? <SunIcon className='h-6 w-6' /> : <MoonIcon className='h-5 w-5' />}
                </button>
                <div className="w-full max-w-lg lg:max-w-xs">
                  <label htmlFor="search" className="sr-only">
                    Search
                  </label>
                  <div className="relative">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                    </div>
                    <input
                      id="search"
                      name="search"
                      className="block w-full rounded-md border border-gray-300 bg-white py-2 pl-10 pr-3 leading-5 placeholder-gray-500 focus:border-indigo-500 focus:placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm"
                      placeholder="Search"
                      type="search"
                    />
                  </div>
                </div>
              </div>
              <div className="flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>

            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 pt-2 pb-3 flex flex-col">

              {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-600 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-800" */}
              <NavLink to="/" end>
                <Disclosure.Button
                  as="a"
                  className={({ isActive }) => isActive ? activeClass : inActiveClass}
                >
                  Home
                </Disclosure.Button>
              </NavLink>
              <NavLink to="/movies/popular" >
                <Disclosure.Button
                  as="a"
                  className={({ isActive }) => isActive ? activeClass : inActiveClass}
                >
                  Popular
                </Disclosure.Button>
              </NavLink>
              <NavLink to="movies/top">
                <Disclosure.Button
                  as="a"
                  className={({ isActive }) => isActive ? activeClass : inActiveClass}
                >
                  Top Rated
                </Disclosure.Button>
              </NavLink>

              <NavLink to="/movies/upcoming">

                <Disclosure.Button
                  as="a"
                  className={({ isActive }) => isActive ? activeClass : inActiveClass}
                >
                  Upcoming
                </Disclosure.Button>
              </NavLink>
            </div>

          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
