 /* eslint-disable @next/next/no-img-element */
 import React from "react"
 import Image from 'next/image'
 import { useRouter } from "next/router";
 export default function Urechea() {
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
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Urechea</h2>
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <div className="mt-0 text-lg text-grey-600">
                        Este formată din trei compartimente: <br/>
                        - urechea internă <br/>
                        - urechea medie <br/>
                        - urechea externă <br/>
                        <div className="flex justify-center -mt-24">
                            <Image src="/images2/urechea.jpeg" width={500} height={300} alt="urechea" className="rounded-lg"/>
                        </div>
                     </div>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">1. Urechea internă</span> <br/>
                        - Formată din: pavilion și conduct auditiv extern <br/> 
                        - Serparată de urechea medie prin timpan. <br/> 
                     </p>
                 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">2. Urechea medie</span> <br/>
                        - Este o cameră plină cu aer. <br/> 
                        - Comunică cu urechea internă prin fereastra ovală. <br/> 
                        - Comunică cu nasul și faringele prin trompa lui Eustachio. <br/> 
                        - Prezintă un lanț de 3 oscioare: ciocan, nicovală și scăriță. <br/> 
                        - Captează sunetul de la urechea externă și îl transmite spre urechea internă. <br/> 
                     </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">3. Urechea externă</span> <br/>
                        - Se găsește în profunzimea osului temporal. <br/>
                        Este formată din: <br/>
                        - labirintul osos: 3 canale semicirculare osoase, vestibul osos și melc osos <br/>
                        - labirintul membranos: 3 canale semicirculare membranare, vestibul membranos și melc membranos <br/>
                        În vestibulul membranos regăsim receptorii pentru echilibru: <br/>
                        - utricula <br/>
                        - sacula <br/>
                        <span className="underline decoration-wavy text-green-700">Utricula și sacula</span> formează macula. <br/>
                        În melcul membranos regăsim receptorii pentru auz: <br/>
                        - oragnul Corti <br/>
                        <span className="underline decoration-wavy text-green-700">Receptorii vestibulari</span> dau informații despre: <br/>
                        - poziție <br/>
                        - poziția capului în raport cu verticala <br/>
                        - rotație = creste ampulare, la baza celor 3 canale semicirculare <br/>
                    </p>
                 </div>
             </div>
         </div>
         
        <div className="flex justify-center">
        <span onClick={()=> void router.push('/10/relatie/ochiul')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Lecția anterioară
        </span>
        <span onClick={()=> void router.push('/10/relatie/limba')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Următoarea lecție
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </span>
        </div>            
 
         </>
     )
 }
 
 






