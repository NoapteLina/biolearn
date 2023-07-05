 /* eslint-disable @next/next/no-img-element */
 import React from "react"
 import Image from 'next/image'
 import { useRouter } from "next/router";
 export default function Animale() {
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
         <div
        className="absolute inset-x-0 mt-[80rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1200/1100] w-[27.125rem] -translate-x-1 rotate-[75deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>
 
         <div className=" py-24 sm:py-12">
             <div className="mx-auto max-w-7xl px-6 lg:px-2">
                 <div className="mx-auto max-w-7xl lg:mx-0">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Țesuturi animale</h2>
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi epiteliale</span> <br/>
                        <span className="underline decoration-wavy text-green-700">a) epitelii de acoperire</span> <br/>
                        - pluristratificate (epiderma, faringe, esofag) <br/>
                        - unistratificate (vilozități intestinale) <br/>
                        - pseudostratificate (mucoasa traheală) <br/>
                        <span className="underline decoration-wavy text-green-700">b) epitelii de secreție</span> <br/>
                        - glande endocrine (substanțe), exocrine (hormoni), mixte (ovare, testicule, pancreas) <br/>
                        <span className="underline decoration-wavy text-green-700">c) epitelii senzoriale</span> <br/>
                        - intră în alcătuirea organelor de simț <br/>
                        <div className="flex justify-end -mt-64">
                            <Image src="/images2/epiteliale.jpg" width={500} height={300} alt="tesuturi" className="rounded-lg"/>
                        </div>
                     </div>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <div className="mt-0 text-lg text-grey-600 text-right">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi conjunctive</span> <br/>
                        - celule <br/>
                        - fibre <br/>
                        - substanța fundamentală <br/>
                        <span className="underline decoration-wavy text-green-700">a) Țesuturi conjunctive moi</span> <br/>
                        - leagă între ele diferite părți ale organelor <br/>
                        - hrănesc și protejează alte țesuturi <br/>
                        - produc elemente figurate ale sângelui <br/>
                        <span className="underline decoration-wavy text-green-700">b) Țesuturi conjunctive semidure</span> <br/>
                        - formeaza cartilaje și nu au vase de sânge <br/>
                        <span className="underline decoration-wavy text-green-700">c) Țesutul conjunctiv dur (osos)</span> <br/>
                        - substanța fundamentală este oseina, impregnată cu minerale de Ca și P <br/>
                        - format din lamele osoase dispuse în două moduri <br/>
                        <span className="underline decoration-wavy text-green-700">1. Compact</span> <br/>
                        - dispoziție concentrică, în jurul unor canale microscopice (canale Havers) <br/> prevăzute cu nervi și vase de sânge <br/>
                        <span className="underline decoration-wavy text-green-700">2. Spongios</span> <br/>
                        - lamelele se întretaie lăsând spații <br/>
                        - se găsește în epifize și în interiorul oaselor scurte și late <br/>
                        <span className="underline decoration-wavy text-green-700">d) Țesutul conjunctiv fluid = sângele</span> <br/>
                        <div className="flex justify-start -mt-72">
                            <Image src="/images2/conjunctiv.jpg" width={500} height={300} alt="tesuturi" className="rounded-lg"/>
                        </div>
                     </div>

                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesutul muscular</span> <br/>
                        - celule alungite = fibre musculare care conțin organite specifice moi = miofibrile cu rol în contracție și relaxare musculară <br/>
                        - poate fi: striat - se află în mușchii scheletici și în musculatura unor organe interne (ex: limba, far inge, prima parte a esofagului), fibrele musculare sunt cilindrice, polinucleate, au contracții voluntare <br/>
                        - neted - în pereții organitelor interne, fibrele musculare au formă de fus și au nucleu central, au contracții voluntare <br/>
                        <div className="flex justify-center ">
                            <Image src="/images2/muscular.png" width={500} height={300} alt="tesuturi" className="rounded-lg"/>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesutul nervos</span> <br/>
                        Format din: <br/>
                        - neuroni (celule specializate în generarea și conducerea impulsurilor nervoase) <br/>
                        - celulele gliale (au forme și mărimi variate, susțin și hrănesc neuronii, sintetizează teaca de mielină) <br/>
                        Neuronii sunt alcătuiți din: <br/>
                        - corp celular (={">"} substanța cenușie a sistemului nervos central) <br/>
                        - prelungiri (una sau mai multe dendrite, un axon ={">"} substanța albă a sistemului nervos central) <br/>
                        *Sinapsa = legătura dintre neuroni și dintre neuroni și celulele efectoare (musculare și glandulare) <br/>
                        <br/>
                        <div className="flex justify-center ">
                            <Image src="/images2/nervos.jpg" width={500} height={300} alt="tesuturi" className="rounded-lg"/>
                        </div>
                    </div>
                 </div>
             </div>
         </div>

        <div className="flex justify-center">
        <span onClick={()=> void router.push('/10/tesuturi/vegetale')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Lecția anterioară
        </span>
        <span onClick={()=> void router.push('/10/nutritia-digestia/nutritia-digestia')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Următoarea lecție
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </span>
        </div>
         </>
     )
 }
