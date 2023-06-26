/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Router } from 'next/router'
import BioLearnLogo from './icons/logo/BioLearnLogo'

const navigation = [
  { name: 'Acasă', href: '/', current: true }, 
  { name: 'Cuprinsuri', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const Cuprins9 = [
  { name: '1. Celula și compoziția ei chimică', href: '/9/celula' },
  { name: '2. Celula procariotă', href: '/9/procariota' },
  { name: '3. Celula eucariotă', href: '/9/eucariota' },
  { name: '4. Peretele celular + Membrana celulară', href: '/9/perete' },
  { name: '5. Citoplasma', href: '/9/citoplasma' },
  { name: '6. Organitele celulare', href: '/9/organite' },
  { name: '7. Cromozomii', href: '/9/cromozomi' },
  { name: '8. Diviziunea celulara', href: '/9/diviziune' },
  { name: '9. Mitoza.Meioza', href: '/9/mitoza-meioza' },
  { name: '10. Ereditatea și variabilitatea lumii vii', href: '/9/ereditatea' },
  {
    name: '11. Grupe de sânge.  Determinismul cromozomilor sexelor. Influența mediului asupra eredității.',
    href: '/9/grupe de sange',
  }, 
  { name: '12. Genetica umană', href: '/9/genetica' },
  { name: '13. Diversitatea lumii vii', href: '/9/diversitate' },
]
const Cuprins10 = [
  { name: '1. Țesuturi vegetale', href: '/10/tesuturi/vegetale' },
  { name: '2. Țesuturi animale', href: '/10/tesuturi/animale' },
  { name: '3. Nutriția și digestia', href: '/10/nutritia' },
  { name: '4. Respirația', href: '/10/respiratia' },
  { name: '5. Circulația', href: '/10/circulatia' },
  { name: '6. Excreția', href: '/10/excretia' },
  { name: '7. Funcțiile de relație', href: '/10/relatie' },
  { name: '8. Sistemul nervos la mamifere', href: '/10/nervos' },
  { name: '9. Reproducerea la plante', href: '/10/reproducere/plante' },
  { name: '10. Reproducerea la om', href: '/10/reproducere/om' },
]

function classNames(...classes: any) {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return classes.filter(Boolean).join(' ')
}

function Navbar() {
  return (
    <>
      <div className="min-h-full">
        <Disclosure as="nav" className="bg-emerald-600">
          {({ open }) => (
            <>
              <div className="mx-16 max-w-full px-4 sm:px-6 lg:px-8">
                <div className="flex h-14 ">
                  <div className="flex items-center">
                    <div className="flex-shrink-0">
                      <div className="h-16 w-16">
                        <BioLearnLogo />
                      </div>
                    </div>

                    <div className="hidden md:block">
                      <div className="ml-10 flex display: inline-flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                            className={classNames(
                              item.current
                                ? 'bg-green-500 text-white'
                                : 'text-white hover:bg-green-500 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                            aria-current={item.current ? 'page' : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      {/*div for dropdown*/}
                      <span className="ml-0 flex inline-flex space-x-4">
                        <div className="relative inline-block text-left">
                          <Menu>
                            {({ open }) => (
                              <>
                                <span className="rounded-md shadow-sm">
                                  <Menu.Button
                                    className={classNames(
                                      open
                                        ? 'bg-green-500 text-white'
                                        : 'text-white hover:bg-green-500 hover:text-white',
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
                                    className="absolute -left-16 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"		
                                  >
                                    <div className="py-1 text-center">
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
                        <div className="relative inline-block text-center">
                          <Menu>
                            {({ open }) => (
                              <>
                                <span className="rounded-md shadow-sm">
                                  <Menu.Button
                                    className={classNames(
                                      open
                                        ? 'bg-green-500 text-white'
                                        : 'text-white hover:bg-green-500 hover:text-white',
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
                                    className="absolute -left-16 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
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
