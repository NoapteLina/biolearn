/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react"

export default function Footer(){
    return(
        <div className='bg-[#ffffff00] relative inset-x-0 w-full bottom-0 h-12'>
        <footer className=" rounded-lg shadow dark:bg-gray-800 ">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                  <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">BioLearn™</a>. All Rights Reserved.
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <a href="/despre" className="mr-4 hover:underline md:mr-6 ">Despre</a>
                    </li>
                    <li>
                        <a href="/bibliografie" className="mr-4 hover:underline md:mr-6">Bibliografie</a>
                    </li>
                    <li>
                        <a href="https://github.com/BioLearn2023/BioLearn" className="mr-4 hover:underline md:mr-6">GitHub</a>
                    </li>
                </ul>
                </div>
            </footer>
        </div>
    )
}