"use strict";
exports.__esModule = true;
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
var react_1 = require("react");
var react_2 = require("@headlessui/react");
var navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Calendar', href: '#', current: false },
    { name: 'Reports', href: '#', current: false },
];
var Cuprins9 = [
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
        href: '#'
    },
    { name: '12. Genetica umană', href: '#' },
    { name: '13. Diversitatea lumii vii', href: '#' },
];
var Cuprins10 = [
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
];
function classNames() {
    var classes = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        classes[_i] = arguments[_i];
    }
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
    return classes.filter(Boolean).join(' ');
}
function Navbar() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: "min-h-full" },
            React.createElement(react_2.Disclosure, { as: "nav", className: "bg-gray-800" }, function (_a) {
                var open = _a.open;
                return (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: "mx-16 max-w-full px-4 sm:px-6 lg:px-8" },
                        React.createElement("div", { className: "flex h-16 items-center justify-between" },
                            React.createElement("div", { className: "flex items-center" },
                                React.createElement("div", { className: "flex-shrink-0" },
                                    React.createElement("img", { className: "h-8 w-8", src: "https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500", alt: "Your Company" })),
                                React.createElement("div", { className: "hidden md:block" },
                                    React.createElement("div", { className: "ml-10 flex items-baseline space-x-4" }, navigation.map(function (item) { return (React.createElement("a", { key: item.name, href: item.href, 
                                        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
                                        className: classNames(item.current
                                            ? 'bg-gray-900 text-white'
                                            : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium'), "aria-current": item.current ? 'page' : undefined }, item.name)); })),
                                    React.createElement("span", { className: "ml-10 flex items-baseline space-x-4" },
                                        React.createElement("div", { className: "relative inline-block text-left" },
                                            React.createElement(react_2.Menu, null, function (_a) {
                                                var open = _a.open;
                                                return (React.createElement(React.Fragment, null,
                                                    React.createElement("span", { className: "rounded-md shadow-sm" },
                                                        React.createElement(react_2.Menu.Button, { className: classNames(open
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium') }, "Clasa 9")),
                                                    React.createElement(react_2.Transition, { show: open, as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                                        React.createElement(react_2.Menu.Items, { static: true, className: "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" },
                                                            React.createElement("div", { className: "py-1" }, Cuprins9.map(function (item) { return (React.createElement(react_2.Menu.Item, { key: item.name }, function (_a) {
                                                                var active = _a.active;
                                                                return (React.createElement("a", { href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, item.name));
                                                            })); }))))));
                                            })),
                                        React.createElement("div", { className: "relative inline-block text-left" },
                                            React.createElement(react_2.Menu, null, function (_a) {
                                                var open = _a.open;
                                                return (React.createElement(React.Fragment, null,
                                                    React.createElement("span", { className: "rounded-md shadow-sm" },
                                                        React.createElement(react_2.Menu.Button, { className: classNames(open
                                                                ? 'bg-gray-900 text-white'
                                                                : 'text-gray-300 hover:bg-gray-700 hover:text-white', 'rounded-md px-3 py-2 text-sm font-medium') }, "Clasa 10")),
                                                    React.createElement(react_2.Transition, { show: open, as: react_1.Fragment, enter: "transition ease-out duration-100", enterFrom: "transform opacity-0 scale-95", enterTo: "transform opacity-100 scale-100", leave: "transition ease-in duration-75", leaveFrom: "transform opacity-100 scale-100", leaveTo: "transform opacity-0 scale-95" },
                                                        React.createElement(react_2.Menu.Items, { static: true, className: "absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" },
                                                            React.createElement("div", { className: "py-1" }, Cuprins10.map(function (item) { return (React.createElement(react_2.Menu.Item, { key: item.name }, function (_a) {
                                                                var active = _a.active;
                                                                return (React.createElement("a", { href: item.href, className: classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700') }, item.name));
                                                            })); }))))));
                                            })))))))));
            }))));
}
exports["default"] = Navbar;
