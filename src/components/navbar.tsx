/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Router } from 'next/router'
import BioLearnLogo from './icons/logo/BioLearnLogo'

const navigation = [
  { name: 'Acasa', href: '/', current: true }, //FIXME: a replacement 
  { name: 'Cuprinsuri', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const Cuprins9 = [
  { name: '1. Celula și compoziția ei chimică', href: '/9/celula' },
  { name: '2. Celula procariotă', href: '#' },
  { name: '3. Celula eucariotă', href: '#' },
  { name: '4. Peretele celular + Membrana celulară', href: '#' },
  { name: '5. Citoplasma', href: '#' },
  { name: '6. Organitele celulare', href: '#' },
  { name: '7. Cromozomii', href: '#' },
  { name: '8. Diviziunea celulara', href: '#' },
  { name: '9. Mitoza.Meioza', href: '#' },
  { name: '10. Ereditatea și variabilitatea lumii vii', href: '#' },
  {
    name: '11. Grupe de sange.  Determinismul cromozomilor sexelor. Influența mediului asupra eredității.',
    href: '#',
  }, //TODO: a replacement
  { name: '12. Genetica umană', href: '#' },
  { name: '13. Diversitatea lumii vii', href: '#' },
]
const Cuprins10 = [
  { name: '1. Țesuturi vegetale', href: '#' },
  { name: '2. Țesuturi animale', href: '#' },
  { name: '3. Nutriția și digestia', href: '#' },
  { name: '4. Respirația', href: '#' },
  { name: '5. Circulația', href: '#' },
  { name: '6. Excreția', href: '#' },
  { name: '7. Funcțiile de relație', href: '#' },
  { name: '8. Sistemul nervos la mamifere', href: '#' },
  { name: '9. Reproducerea la plante', href: '#' },
  { name: '10. Reproducerea la om', href: '#' },
]

function classNames(...classes: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              {/* //FIXME: inline */}
              <div className="mx-16 max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                    <div className="w-16 h-16">
                      <BioLearnLogo />
                    </div>
                      {/* //TODO:logo8 */}
                    </div>
                    
                    <div className="hidden md:block">
                      <div className="ml-10 flex items-baseline space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            className={classNames(
                              item.current
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/*div for dropdown*/}
                      <span className="ml-10 flex items-baseline space-x-4">
                        <div className="relative inline-block text-left">
                          <Menu>
                            {({ open }) => (
                              <>
                                <span className="rounded-md shadow-sm">
                                  <Menu.Button
                                    className={classNames(
                                      open
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                      'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                  >
                                    Clasa 9
                                  </Menu.Button>
                                </span>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items
                                    static
                                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                  >
                                    <div className="py-1">
                                      {Cuprins9.map((item) => (
                                        <Menu.Item key={item.name}>
                                          {({ active }) => (
                                            <a
                                              href={item.href}
                                              className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                              )}
                                            >
                                              {item.name}
                                            </a>
                                          )}
                                        </Menu.Item>
                                      ))}
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </>
                            )}
                          </Menu>
                        </div>
                        <div className="relative inline-block text-left">
                          <Menu>
                            {({ open }) => (
                              <>
                                <span className="rounded-md shadow-sm">
                                  <Menu.Button
                                    className={classNames(
                                      open
                                        ? 'bg-gray-900 text-white'
                                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                      'rounded-md px-3 py-2 text-sm font-medium'
                                    )}
                                  >
                                    Clasa 10
                                  </Menu.Button>
                                </span>

                                <Transition
                                  show={open}
                                  as={Fragment}
                                  enter="transition ease-out duration-100"
                                  enterFrom="transform opacity-0 scale-95"
                                  enterTo="transform opacity-100 scale-100"
                                  leave="transition ease-in duration-75"
                                  leaveFrom="transform opacity-100 scale-100"
                                  leaveTo="transform opacity-0 scale-95"
                                >
                                  <Menu.Items
                                    static
                                    className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                                  >
                                    <div className="py-1">
                                      {Cuprins10.map((item) => (
                                        <Menu.Item key={item.name}>
                                          {({ active }) => (
                                            <a
                                              href={item.href}
                                              className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                              )}
                                            >
                                              {item.name}
                                            </a>
                                          )}
                                        </Menu.Item>
                                      ))}
                                    </div>
                                  </Menu.Items>
                                </Transition>
                              </>
                            )}
                          </Menu>
                        </div>
                      </span>
                    </div>
                  </div>
                  {/*nu ne intere ca e mobil*/}
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </>
  )
}
export default Navbar
