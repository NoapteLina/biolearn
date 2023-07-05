 /* eslint-disable @next/next/no-img-element */
 import React from "react"
 import { useRouter } from "next/router";
import Link from "next/link";
 export default function Nervos() {
    const router = useRouter();
     return(
         <>
         <div
         className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
         aria-hidden="true"
     >
         <div
             className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-green-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
             style={{
                 clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
             }} />
         </div><div
             className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-100"
             aria-hidden="true"
     >
             <div
                 className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-300 to-green-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                 style={{
                     clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                 }} />
         </div><div
             className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
             aria-hidden="true"
         >
             <div
                 className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-emerald-950 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                 style={{
                     clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                 }} />
         </div>
 
         <div className=" py-24 sm:py-12">
             <div className="mx-auto max-w-7xl px-6 lg:px-2">
                 <div className="mx-auto max-w-7xl lg:mx-0">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Bibliografie</h2>
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Lecții</span>
                        <div className="text-green-500" onClick={()=> void router.push('https://drive.google.com/file/d/1Q9zbEqW1U0oCfXC8EwOBSlKWTyvs4x9L/view?usp=drive_link')}>- Caiet notițe clasa a 9-a, Liceul Teoretic Tudor Vladimirescu</div>
                        <div className="text-green-500" onClick={()=> void router.push('https://drive.google.com/file/d/1QCDqwSVNPTN1f6KMazfMmWBAOtOH55e4/view?usp=drive_link')}>- Caiet notițe clasa a 10-a, Liceul Teoretic Tudor Vladimirescu</div>
                        <div className="">- Manual biologie pentru clasa a 9-a, editura All, autor: Ioana Aramis</div>
                        <div className="">- Manual biologie pentru clasa a 10-a, editura LVS Crepuscul, autori: Stelica Ene, Gheorghe Sandu, Gheorghe Gamaneci </div>
                     </div>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
                    
                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Teste</span>
                        <div className="text-green-500" onClick={()=> void router.push('https://www.hotnews.ro/stiri-educatie-25634702-bac-2022-subiecte-fizica-biologie-anatomie-geografie-bacalaureat.htm')}>- https://www.hotnews.ro/stiri-educatie-25634702-bac-2022-subiecte-fizica-biologie-anatomie-geografie-bacalaureat.htm</div>
                        <div className="text-green-500" onClick={()=> void router.push('https://liceunet.ro/bac-biologie-vegetala/rezolvari/2023/modele-de-subiecte')}>- https://liceunet.ro/bac-biologie-vegetala/rezolvari/2023/modele-de-subiecte</div>
                        <div className="text-green-500" onClick={()=> void router.push('https://profesorjitaruionel.com/variante-bac-2020-noi-teste-de-antrenament-edu-toate-probele-scrise/')}>- https://profesorjitaruionel.com/variante-bac-2020-noi-teste-de-antrenament-edu-toate-probele-scrise/e</div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Modele bacalaureat</span>
                        <Link className="text-green-500" onClick={()=> void router.push('https://www.youtube.com/@RalucaMihaelaGrecu')} href="https://www.youtube.com/@RalucaMihaelaGrecu">- https://www.youtube.com/@RalucaMihaelaGrecu</Link>
                        <div className="text-green-500" onClick={()=> void router.push('https://www.youtube.com/@biologiapentrutoti8471')}>- https://www.youtube.com/@biologiapentrutoti8471</div>
                    </div>
                     
                    <div className="flex justify-center">
                        <span onClick={()=> void router.push('/10/relatie/limba')} className="inline-flex items-center px-4 py-2 mt-32 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Acasă
                        </span>
                    </div>
                 </div>
             </div>
         </div>

        
         </>
     )
 }
 
 

 