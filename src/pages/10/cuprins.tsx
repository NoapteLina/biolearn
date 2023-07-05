'use client';
import { Button, Tooltip } from 'flowbite-react';
import React from "react";
import { useRouter } from "next/router";
import { InformationCircleIcon } from '@heroicons/react/24/outline';
function Cuprins (){
    const router = useRouter()
    return (
        <>    
            <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[16/9] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
            aria-hidden="true"
    >
            <div
                className="relative left-[calc(50%-11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-yellow-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div><div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-green-900 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
        
            <ol className="absolute text-gray-900 border-l border-green-500 dark:border-gray-700 dark:text-gray-400 ml-[11%] mt-10">                  
                <li className="mb-7 ml-6">            
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/tesuturi/vegetale')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/tesuturi/vegetale')}>Lecția 1</h3>
                    <p className="text-sm">Țesuturi vegetale</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/tesuturi/animale')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/tesuturi/animale')}>Lecția 2</h3>
                    <p className="text-sm">Țesuturi animale</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/nutritia-digestia/nutritia-digestia')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/nutritia-digestia/nutritia-digestia')}>Lecția 3</h3>
                    <p className="text-sm">Nutriția - Digestia</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/nutritia-digestia/sistemul-digestiv')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/nutritia-digestia/sistemul-digestiv')}>Lecția 4</h3>
                    <p className="text-sm">Sistemul digestiv</p>
                </li>
                <li className=" mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/nutritia-digestia/sucurile-digestive')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/nutritia-digestia/sucurile-digestive')}>Lecția 5</h3>
                    <p className="text-sm">Sucurile digestive</p>
                </li>
                <li className=" mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/respiratia/respiratia-anaeroba')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/respiratia/respiratia-anaeroba')}>Lecția 6</h3>
                    <p className="text-sm">Respirația anaerobă</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/respiratia/sistemul-respirator')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/respiratia/sistemul-respirator')}>Lecția 7</h3>
                    <p className="text-sm">Sistemul respirator</p>
                </li>
                <li className=" mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/circulatia/mediul-intern')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/circulatia/mediul-intern')}>Lecția 8</h3>
                    <p className="text-sm">Mediul intern </p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/circulatia/sistemul-circulator')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/circulatia/sistemul-circulator')}>Lecția 9</h3>
                    <p className="text-sm">Sistemul circulator</p>
                </li>
            </ol>

            <ol className="absolute text-gray-900 border-l border-green-500 dark:border-gray-700 dark:text-gray-400 ml-[75%] mt-10">                  
                <li className="mb-7 ml-6">            
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/excretia/plante')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/excretia/plante')}>Lecția 10</h3>
                    <p className="text-sm">Excreția la plante</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/excretia/sistemul-excretor')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/excretia/sistemul-excretor')}>Lecția 11</h3>
                    <p className="text-sm">Sistemul excretor</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/relatie/sensibilitate-miscare')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/relatie/sensibilitate-miscare')}>Lecția 12</h3>
                    <p className="text-sm">Sensibilitatea și mișcarea</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/relatie/ochiul')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/relatie/ochiul')}>Lecția 13</h3>
                    <p className="text-sm">Ochiul</p>
                </li>
                <li className=" mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/relatie/urechea')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/relatie/urechea')}>Lecția 14</h3>
                    <p className="text-sm">Urechea</p>
                </li>
                <li className=" mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/relatie/limba')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/relatie/limba')}>Lecția 15</h3>
                    <p className="text-sm">Limba</p>
                </li>
                <li className="mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/nervos')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/nervos')}>Lecția 16</h3>
                    <p className="text-sm">Sistemul nervos la mamifere</p>
                </li>
                <li className=" mb-7 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/reproducere/plante')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/10/reproducere/plante')}>Lecția 17</h3>
                    <p className="text-sm">Reproducerea la plante</p>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/10/reproducere/om')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight"  onClick={()=> void router.push('/10/reproducere/om')}>Lecția 18</h3>
                    <p className="text-sm">Reproducerea la animale</p>
                </li>
            </ol>
            
           
            <div className="max-w-sm p-6 bg-gradient-to-tr from-lime to-lime-200 border border-green-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-[36%] mt-[13%]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Lecții clasa a 10-a</h5>
                {/* <p className="mb-3 font-normal text-black-700 dark:text-gray-400 text-justify">
                - Pentru a deschide pagina cu lecția pe care doriți să o accesați, apăsați pe iconița din dreptul lecției sau chiar pe titlul acesteia (ex: Lecția 1), după cum vă este mai ușor, și veți fi redirecționați către pagina cu lecția respectivă. <br/>
                </p> */}
                <Tooltip className = "w-96" content="Pentru a deschide pagina cu lecția pe care doriți să o accesați, apăsați pe iconița din dreptul lecției sau chiar pe titlul acesteia (ex: Lecția 1), după cum vă este mai ușor, și veți fi redirecționați către pagina cu lecția respectivă."
                style="light"
                ><InformationCircleIcon className="w-8 h-8 -mt-10"/></Tooltip>
                <p className="mb-3 mt-8 font-normal text-black-700 dark:text-gray-400 text-justify">
                - Dacă vreți să schimbați clasa sau să alegeți altă categorie deoarece ați terminat lecțiile, doar apăsați butonul acasă. <br/>
                </p>
                <Button  className="w-80 rounded-lg mt-6" gradientDuoTone="greenToBlue" 
                onClick={() => void router.push('/#')}>
                    Acasă
                    <svg aria-hidden="true" className="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </Button>
            </div>

        </>
        
    )
}
export default Cuprins