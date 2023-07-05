 /* eslint-disable @next/next/no-img-element */
 import React from "react"
 import Image from 'next/image'
 import { useRouter } from "next/router";
 export default function Vegetale() {
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
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Țesuturi vegetale</h2>
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
  
                     <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi embrionare (meristematice)</span> <br/>
                        - celulele se divid continuu <br/>
                        - celulele sunt mici, cu pereți subțiri, fără spații între ele <br/>          
                        <span className="underline decoration-wavy text-green-700">Clasificare:</span> <br/>
                        <span className="underline decoration-wavy text-green-700">1. Meristeme primare apicale </span> <br/>
                        - în vârful rădăcinilor și tulpinilor <br/>
                        - asigură creșsterea în înălțime <br/>
                        <span className="underline decoration-wavy text-green-700">2. Meristeme primare intercalare (deasupra nodurilor)</span> <br/>
                        - asigură creșterea în lungime <br/>
                        <span className="underline decoration-wavy text-green-700">3. Meristeme secundare (laterale)</span> <br/>
                        - combiul subero-felodermic (felogenul) <br/>
                        - combiul vascular (libero-lemnos) <br/>
                        - asigură îngroșarea secundară a rădăcinii și tulpinii <br/>
                        <div className="flex justify-end -mt-64">
                            <Image src="/images2/embrionare.jpg" width={400} height={300} alt="tesuturi" className="rounded-lg"/>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi definitive</span> <br/>
                        - provin din celulele țesutului embrionar <br/>
                        - celulele nu se divid <br/>
                        <span className="underline decoration-wavy text-green-700">Clasificare:</span> <br/>
                        1. De apărare <br/>
                        2. Fundamentale <br/>
                        3. Conducătoare <br/>
                        4. Secretoare <br/>
                        5. Mecanice <br/>
                        <div className="flex justify-end -mt-64">
                            <Image src="/images2/definitive.png" width={400} height={300} alt="tesuturi" className="rounded-lg"/>
                        </div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi de apărare</span> <br/>
                        - primare: epiderma, exoderma, endoderma <br/>
                        - secundare: suber, feloderm <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi fundamentale</span> <br/>
                        a) de depozitare <br/>
                        b) asimilatoare <br/>
                        - țesut palisadic (celule alungite cu multă clorofilă) <br/>
                        - țesut lacunar (celule cu spații între ele și cu mai puțină clorofilă) <br/>
                        c) acvifere (depozitează apa la plantele din deșert) <br/>
                        d) aerifere (depozitează aer la plantele acvatice) <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi conducătoare</span> <br/>
                        - vase lemnoase (conduc seva brută, celule moarte) <br/>
                        - vase liberiene (conduc seva elaborată, celule vii) <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi secretoare</span> <br/>
                        - celulele produc și elimină diferite substanțe: rășină, nectar, latex, arome <br/>
                    </p>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Țesuturi mecanice (de susținere)</span> <br/>
                        - dau organelor rezistență <br/>
                        - sunt formate din celule cu pereții îngroșați <br/>
                    </p>
                 </div>
             </div>
         </div>


        <div className="flex justify-center">
        <span onClick={()=> void router.push('/10/tesuturi/animale')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Următoarea lecție
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </span>
        </div>
         </>
     )
 }
