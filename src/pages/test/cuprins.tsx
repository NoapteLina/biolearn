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

            <ol className="absolute text-gray-900 border-l border-green-500 dark:border-gray-700 dark:text-gray-400 ml-[11%] mt-32">                  
                <li className="mb-14 ml-6">            
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/1')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/1')}>Testul 1</h3>
                </li>
                <li className="mb-14 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/2')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/2')}>Testul 2</h3>
                </li>
                <li className="mb-14 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/3')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/3')}>Testul 3</h3>
                </li>
                <li className="mb-14 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/4')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/4')}>Testul 4</h3>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/5')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/5')}>Testul 5</h3>
                </li>
            </ol>

            <ol className="absolute text-gray-900 border-l border-green-500 dark:border-gray-700 dark:text-gray-400 ml-[80%] mt-32">                  
                <li className="mb-14 ml-6">            
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/6')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/6')}>Testul 6</h3>
                </li>
                <li className="mb-14 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/7')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/7')}>Testul 7</h3>
                </li>
                <li className="mb-14 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/8')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/8')}>Testul 8</h3>
                </li>
                <li className="mb-14 ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/9')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/9')}>Testul 9</h3>
                </li>
                <li className="ml-6">
                    <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-1 ring-green-500 dark:ring-green-900 dark:bg-green-900">
                        <svg aria-hidden="true" className="w-5 h-5 text-green-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path><path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" onClick={()=> void router.push('/test/10')}></path></svg>
                    </span>
                    <h3 className="font-medium leading-tight" onClick={()=> void router.push('/test/10')}>Testul 10</h3>
                </li>
            </ol>
            
           
            <div className="max-w-sm p-6 bg-gradient-to-tr from-lime to-lime-200 border border-green-500 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ml-[36%] mt-[13%]">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Teste</h5>
                {/* <p className="mb-3 font-normal text-black-700 dark:text-gray-400 text-justify">
                - Pentru a deschide pagina cu lecția pe care doriți să o accesați, apăsați pe iconița din dreptul lecției sau chiar pe titlul acesteia (ex: Lecția 1), după cum vă este mai ușor, și veți fi redirecționați către pagina cu lecția respectivă. <br/>
                </p> */}
                <Tooltip className = "w-96" content="Pentru a deschide pagina cu testul pe care doriți să îl accesați, apăsați pe iconița din dreptul testului sau chiar pe titlul acestuia (ex: Test 1), după cum vă este mai ușor, și veți fi redirecționați către pagina cu testul respectiv."
                style="light"
                ><InformationCircleIcon className="w-8 h-8 -mt-10"/></Tooltip>
                <p className="mb-3 mt-8 font-normal text-black-700 dark:text-gray-400 text-center">
                Dacă vreți să schimbați clasa sau să alegeți altă categorie deoarece ați terminat testele, doar apăsați butonul acasă. <br/>
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