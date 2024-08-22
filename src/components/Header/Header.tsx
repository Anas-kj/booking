'use client'
import Image from 'next/image'
import logo from '../../../public/logo.png'
import Link from 'next/link'
import { Fragment, useState } from 'react'
import { ChevronDownIcon, HomeIcon, MenuIcon, PhoneIcon, PlayCircleIcon } from 'lucide-react'
import { Popover, Dialog, Disclosure,Transition, PopoverButton, DisclosureButton } from '@headlessui/react'
import { ChatBubbleLeftIcon, PaperAirplaneIcon, XMarkIcon } from '@heroicons/react/16/solid'
import { cn } from '@/lib/utils'

const Header = () => { {/*Clean tailwind by setting default!!!
Also seperate to different components */}
  const navigationLinks = [
    {link:"Flights",href:"/flights"},
    {link:"Flights + Hotels",href:"/flights-hotels"},
    {link:"Car rentals",href:"/car-rentals"},
    {link:"Attractions",href:"/attractions"}
  ]

  const products = [
    {
      name: "Book a Stay",
      description: "Find the perfect place to stay",
      href: "#",
      icon: HomeIcon
    },
    {
      name: "Book a Fligh",
      description: "Speak directly to your customer",
      href: "/flights",
      icon: PaperAirplaneIcon
    },
    {
      name: "Contact Our Support Team",
      description: "Your customers' data will be safe and secure",
      href: '#',
      icon: ChatBubbleLeftIcon
    }
  ]

  const callToAction = [
    {name:"See Demo Booking", href:"#", icon: PlayCircleIcon },
    {name:"Contact Support",href:"#", icon: PhoneIcon}
  ]

  const [showMobileMenu, setShowMobileMenu] = useState(false)
  return (
    <header className='bg-[#003B95]'>
      <nav 
        className='mx-auto flex  justify-between max-w-7xl items-center p-6 lg:px-8'
        aria-label=''
      >
        <div className="flex lg:flex-1" >
          <Link href="/" className='p-1.5' aria-label='Booking.com'>
            <Image 
                src={logo} 
                className='w-30 lg:w-36 ' 
                alt='booking.com logo' 
            />
          </Link>
        </div>

        <div className="lg:hidden">
          <button 
            onClick={() => setShowMobileMenu(prev =>!prev)}
            className='p-2 text-white'
            aria-label='Open Main Menu'
          >
            <MenuIcon className='h-6 w-6' aria-label='Menu Icon' aria-hidden="true"/>
          </button>
        </div >

        <Popover.Group className='hidden lg:flex lg:gap-x-12'>
            <Popover className="relative">
                <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                    Stays 
                    <ChevronDownIcon 
                        className='h-5 w-5 flex-none text-white' 
                        aria-hidden='true'
                    />
                </Popover.Button>
                <Transition 
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-150"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"

                >
                  <Popover.Panel className='absolute bg-white -left-8 
                  top-full z-10 mt-3 w-screen max-w-md overflow-hidden 
                  rounded-xl shadow-lg ring-1 ring-gray-900/5 '>
                      <div className='p-4'>
                        {products.map((item) => {
                          const Icon = item.icon
                          return (
                            <Link
                              key={item.name}
                              href={item.href}
                              className='group relative flex items-center gap-x-6 p-4 rounded-lg text-sm leading-6
                              hover:bg-gray-50'
                              aria-label={item.name}
                            >
                                <div className='flex h-11 w-11 flex-none items-center justify-center 
                                group-hover:bg-gray-200 p-2 rounded-lg'>
                                  <Icon 
                                    className='h-6 w-6 text-[#003B95] group-hover:text-blue-600'
                                    aria-hidden='true'
                                  />
                                </div>
                                <div className='flex-auto'>
                                  <span className="block semi-bold text-[#003B95]">
                                    {item.name}
                                  </span>
                                  <p className='mt-1 text-[#003B95]'>{item.description}</p>
                                </div>
                            </Link>
                          )
                        })}
                      </div>
                      <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                        {callToAction.map((item) => (
                          <Link 
                            key={item.name}
                            href={item.href}
                            className='flex items-center justify-center gap-x-1.5 p-4 leading-6 text-[#003B95] text-sm font-semibold hover:bg-gray-100'
                          >
                          <item.icon className='h-6 w-6 text-[#003B95]'/>
                          <span>{item.name}</span>
                          </Link>
                        ))}
                      </div>
                  </Popover.Panel>
                </Transition>
            </Popover>
            {navigationLinks.map((link) => (
              <Link 
                key={link.link}
                href={link.href}
                className='text-white text-sm font-semibold leading-6'
              >
                {link.link}
              </Link>
            ))}
        
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end ">
          <Link 
            href="#"
            className="text-white text-sm font-semibold leading-6"
          >
              Login <span aria-hidden='true'>&rarr;</span>
          </Link>
        </div>
        
        <Dialog 
            as="div" 
            className="lg:hidden" 
            open={showMobileMenu} 
            onClose={setShowMobileMenu}
        >
          <div className='fixed inset-0 z-10'/>

          <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full
          overflow-y-auto bg-[#003B95] px-6 py-6 sm:max-w-sm sm:ring-1
          sm:right-gray-900/10"
          >
            <div className="flex items-center justify-between">
                <Link 
                  href="#"
                  className='p-1.5 -m-1.5'
                  aria-label='Booking.com'
                >
                  <Image 
                    src={logo}
                    className='w-28'
                    alt='Booking.com logo'
                  />
                </Link>
                <button
                  type='button'
                  onClick={() => setShowMobileMenu(false)}
                  className='p-2.5 text-white rounded-md -m-2.5'
                  aria-label='Close Main Menu'
                >
                  <XMarkIcon className='h-6 w-6' aria-hidden="true"/>
                </button>
            </div>
            <div className='mt-6 '>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className="space-y-2 py-6">
                  <Disclosure>
                    {({ open }) => (
                      <>
                        <Disclosure.Button className='flex w-full items-center justify-between rounded-lg py-2 pl-3
                        pr-3.5 text-base text-white  font-semibold leading-7 hover:bg-blue-800'
                        >
                          Stays
                          <ChevronDownIcon 
                            className={cn(
                              open?'transform rotate-180':'',
                              'h-5 w-5 text-white'
                            )} 
                            aria-hidden='true'
                          />
                        </Disclosure.Button>
                        <Disclosure.Panel className='mt-2 space-y-2'>
                          {[...products,...callToAction].map((item) => (
                            <Disclosure.Button
                              key={item.name}
                              as={Link}
                              href={item.href}
                              className="block rounded-lg py-2 pl-6 text-sm text-white font-semibold leading-7
                              hover:bg-blue-800"
                            >
                              {item.name}
                            </Disclosure.Button>
                          ))}
                        </Disclosure.Panel>
                      </>
                    )}
                  </Disclosure>
                    {navigationLinks.map((link) => (
                      <Link 
                        key={link.link}
                        href={link.href}
                        className='block py-2 pl-3 text-md text-white font-semibold leading-7 hover:bg-blue-800 rounded-lg'
                      >
                        {link.link}
                      </Link>
                    ))}
                    <div className='py-6'>
                      <Link 
                        href="#"
                        className='block py-2 pl-3 text-md text-white font-semibold leading-7 hover:bg-blue-800 rounded-lg'
                      >
                        Login
                      </Link>
                    </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>

        </Dialog>

      </nav>
    </header>
  )
}

export default Header
