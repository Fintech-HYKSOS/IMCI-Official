import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Logo from '../../assets/img/Logo-IMCI-Update-WithoutBG.png';
import './style_nav.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const navigation = [
    { name: 'Accueil', href: '/', current: false, subMenuExist: false, },
    { name: 'En Vente', href: '/EnVente', current: false, subMenuExist: false, },
    { name: 'En Location', href: '/EnLocation', current: false, subMenuExist: false, },
    { name: 'Nos Services', href: '/Services', current: false, subMenuExist: false, },
    {
        name: 'Fournisseurs',
        href: '/Fournisseurs',
        current: false,
        subMenuExist: false,
    },

    {
        name: "Main d'oeuvre", current: false, subMenuExist: true,
        subMenu: [
            { name: "Ajouter Main d'oeuvre", href: '/MainOeuvre/addMainOeuvre', current: false },
            { name: "Lister Main d'oeuvre", href: '/MainOeuvre', current: false },
        ]
    },
    { name: 'Checking', href: '/Checkings', current: false, subMenuExist: false, },

]

const AuthentificationButtons = [
    { name: "S'inscrire", href: 'https://app.imci.cloud/?register=true', current: false },
    { name: "Se connecter", href: 'https://app.imci.cloud/?login=true', current: false }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function NavBarCustom() {
    const navigate = useNavigate()
    const [hiddenOnOrOff, setHiddenOnOrOff] = useState('hidden')
    const [hiddenOnOrOffMobileNavbar, setHiddenOnOrOffMobileNavbar] = useState('hidden')

    //Exists only for toggling display of absolute subMenu of "Main Oeuvre"
    const switchHidden = (e) => {
        e.preventDefault();
        console.log("swtch avtivated")
        if (hiddenOnOrOff === 'hidden') {
            setHiddenOnOrOff('block')
        } else {
            setHiddenOnOrOff('hidden')
        }
    }

    //Exists only for toggling display of the navbar on mobile
    const switchHiddenMobileNavbar = (e) => {
        e.preventDefault();
        console.log("swtch navbar avtivated")
        if (hiddenOnOrOffMobileNavbar === 'hidden') {
            setHiddenOnOrOffMobileNavbar('block')
        } else {
            setHiddenOnOrOffMobileNavbar('hidden')
        }
    }

    return (
        <Disclosure as="nav" className="bg-[#001C54] sticky header-custom">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 screen_navbar:px-6 lg:px-8 header-custom-content">
                        <div className="relative flex items-center justify-between header-custom-content">
                            
                            <div className="absolute inset-y-0 left-0 flex items-center screen_navbar:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>

                            {/* Section Gauche Logo And Main Links */}
                            <div className="flex flex-1 items-center justify-center screen_navbar:items-stretch screen_navbar:justify-start header-custom-content">
                                <Link to={"/"}>
                                    <div className="flex flex-shrink-0 items-center h-32">
                                        <img
                                            className="h-32 object-contain"
                                            src={Logo}
                                            alt="imci.cloud Logo"
                                        />
                                    </div>
                                </Link>

                                <div className="relative hidden screen_navbar:ml-6 screen_navbar:block">
                                    <div className="relative flex space-x-4">
                                        {navigation.map((item) => (
                                            item.subMenuExist !== true ?
                                                <button onClick={(e) => { setHiddenOnOrOff("block" ? "hidden" : "block"); navigate(`${item.href}`) }} className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-screen_navbar font-medium'
                                                )}
                                                >
                                                    {item.name}
                                                </button>

                                                :

                                                <div className='absolute relative-custom'>
                                                    <button onClick={(e) => switchHidden(e)} className={classNames(
                                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                        'rounded-md px-3 py-2 text-screen_navbar font-medium')} > {item.name}</button>

                                                    <div className={`${hiddenOnOrOff} bg-white absolute px-3 py-3 rounded`}>
                                                        {(item.subMenu).map((subItem, key) => (
                                                            <div className='subMenu-Navbar-custom my-2'>
                                                                <button onClick={(e) => { setHiddenOnOrOff("block" ? "hidden" : "block"); navigate(`${subItem.href}`) }} className={classNames('text-black')}>
                                                                    {subItem.name}
                                                                </button>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </div>
                                        ))}
                                    </div>
                                </div>
                            </div>


                            {/* Section Droite */}
                            <div className="relative z-30 inset-y-0 flex items-center pr-2 screen_navbar:static screen_navbar:inset-auto screen_navbar:ml-6 screen_navbar:pr-0 header-custom-content header-custom-content-right">
                                {/* <div className="flex space-x-4 navigation-custom">
                                    {AuthentificationButtons.map((item) => (
                                        <Link onClick={(e) => { setHiddenOnOrOff("block" ? "hidden" : "block"); }} className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-screen_navbar font-medium'
                                        )}
                                            to={item.href}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div> */}

                                {/* Icon Cloche/Bell */}
                                {/* <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                                </button> */}

                                {/* Profile dropdown */}
                                {/* <Menu as="div" className="relative ml-3">
                                    <div>
                                        <Menu.Button className="relative flex rounded-full bg-gray-800 text-screen_navbar focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
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
                                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-screen_navbar text-gray-700')}
                                                    >
                                                        Your Profile
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-screen_navbar text-gray-700')}
                                                    >
                                                        Settings
                                                    </a>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <a
                                                        href="#"
                                                        className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-screen_navbar text-gray-700')}
                                                    >
                                                        Sign out
                                                    </a>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu> */}
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="disclosure-custom screen_navbar:hidden">
                        <div className="relative space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                item.subMenuExist !== true ?
                                    <button
                                        onClick={(e) => { navigate(`${item.href}`); }}
                                        className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'block rounded-md px-3 py-2 text-base font-medium'
                                        )}
                                        aria-current={item.current ? 'page' : undefined}>
                                        {item.name}
                                    </button>

                                    :

                                    <div className='relative'>
                                        <button onClick={(e) => switchHidden(e)} className={classNames(
                                            item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                            'rounded-md px-3 py-2 text-screen_navbar font-medium')} > {item.name}</button>

                                        <div className={`${hiddenOnOrOff} bg-white absolute px-3 py-3 rounded`}>
                                            {(item.subMenu).map((subItem, key) => (
                                                <div className='subMenu-Navbar-custom my-2'>
                                                    <button className={classNames('text-black')}
                                                        onClick={(e) => { navigate(`${subItem.href}`) }}>
                                                        {subItem.name}
                                                    </button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                            ))}

                            {/* <div className="flex space-x-4">
                                {AuthentificationButtons.map((item) => (
                                    <Link className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                        to={item.href}>
                                        {item.name}
                                    </Link>
                                ))}
                            </div> */}
                        </div>
                    </Disclosure.Panel>
                </>
            )
            }
        </Disclosure >
    )
}
