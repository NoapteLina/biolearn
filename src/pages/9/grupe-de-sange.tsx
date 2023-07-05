 /* eslint-disable @next/next/no-img-element */
 import React from "react"
 import Image from "next/image"
 import { useRouter } from "next/router";
 export default function Sange() {
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
        className="absolute inset-x-0 mt-[69rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[1400/1400] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>
 
         <div className=" py-24 sm:py-12">
             <div className="mx-auto max-w-7xl px-6 lg:px-2">
                 <div className="mx-auto max-w-7xl lg:mx-0">
                     <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Grupe de sânge. Determinismul cromozomilor sexelor. Influența mediului asupra eredității</h2>
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <div className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Grupe de sânge </span>  <br/>
                            - Există 4 grupe de sânge, determinate de prezența sau absența antigenilor A și B de pe suprafața hematiilor. <br/>
                            - În plasmă există anitcorpi pentru aceste antigene, anticorpi anti A și anticorpi anti B. <br/>
                            - Anticorpii nu trebuie să intre în contacr cu antigena, pentru că produc distrugerea hematiei (pot produce moartea). De aceea, este foarte important să cunoaștem grupa de sânge pentru o eventuală transfuzie. <br/>
                        <div className="flex justify-center mt-10">
                            <Image src="/images/sange.png" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                            <Image src="/images/sange2.jpg" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                        </div>
                     </div>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Imunitatea</span> <br/>
                            Imunitatea reprezintă capacitatea organismului de a recunoaște și neutraliza (distrage) agenți patogeni, celule străine corpului sau celule proprii dar modificate. Acestea conțin pe suprafața lor antigene care determină leucocitele să sintetizeze anticorpi specifici. <br/>
                            Leucocitele au memorie, ele vor sintetiza același tip de anticorp, chiar dacă o perioadă lungă de timp, la contactul cu respectivul antigen. <br/>
                            Imunitatea poate fi dobândită: <br/>
                            natural - în urma contactului organismului cu antigena <br/>
                            artificial - prin vaccinuri care conțin virusul mort/inactiv sau prin seruri care conțin anticorpi pentru virus
                     </p>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Determinismul cromozomilor sexelor</span> <br/>
                         - Cromozomii identici la cele două sexe se numesc autozomi, iar cei diferiți se numesc heterozomi. <br/>
                            Ei determină genele care determină sexul. <br/>
                            - Există două tipuri de determinism cromozomial al sexelor: <br/>
                            <span className="underline decoration-wavy text-green-700">1. Tipul Drosophila</span> întâlnit la insecte, toate mamiferele (inclusiv la om) <br/>
                            - Cromozomi ai sexului = HETEROZOMI -X -Y <br/>
                            La Drosophila melanogster: <br/>
                            - femela are: 6 autozomi - cromozomii identici la cele două sexe; 2 heterozomi identici XX <br/>
                            - mascului are: 6 autozomi; 2 heterozomi diferiți XY <br/>
                            Femelele sunt homogametice, având cromozomii sexului XX, iar masculii sunt heterogametici, având cromozomii sexului XY. <br/>
                            <span className="underline decoration-wavy text-green-700">2. Tipul Abrazas</span> (pasăre): întâlnit la fluturele de mătase, toate păsările, reptile, unii amfibieni. <br/>
                            - Femelele sunt heterogametice, iar masculii homogametici. <br/>

                     </p>
 
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                         <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Influența mediului asupra eredității</span> <br/>
                         <span className="underline decoration-wavy text-green-700">Mutageneza</span> = procesul de apariție al mutațiilor<br/>
                         <span className="underline decoration-wavy text-green-700">Mutant</span> = individul purtător de mutanți<br/>
                         <span className="underline decoration-wavy text-green-700">Mutația genetică</span> = orice modificare în structura și funcția materialului genetic, care nu este o consecință a recombinării genetice <br/>
                     </p>
                     
                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>
 
                     <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Clasificare mutațiilor</span> <br/>
                        a. După celulele afectate: somatice, gametice <br/>
                        b. După cromozomii afectați: autozomale, heterozomale <br/>
                        c. După cantitatea de material genetic afectat <br/>
                        d. După efectul aspura organismului: neutre, dăunătoare, folositoare <br/>
                        e. După modul de apariție: naturale, artificiale <br/>
                        După cantitatea de material genetic afectat întalnim: <br/>
                        <span className="underline decoration-wavy text-green-700">1. Genice</span> <br/>
                        - modifică structura și funcția genei <br/>
                        - cea mai mică mutație genetică este mutația punctiformă (afectează o singură pereche de nucleotide) <br/>
                        <span className="underline decoration-wavy text-green-700">2. Cromozomale</span> <br/>
                        - afectează structura cromozomilor <br/>
                        - produce rupturi cromozomlae: deleția, inversia, duplicația, translocația <br/>
                        <span className="underline decoration-wavy text-green-700">3. Genomice</span> <br/>
                        - afectează întreaga cantitate de material genetic <br/>
                        - pot fi poliploidii (autopoliploide sau alopoliploide), aneuploidii (se modifică numărul de cromozomi din genom) <br/>
                     </p>

                     <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                     <p className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Factori mutageni</span> <br/>
                        - fizici: radiații neionizate, radiații ionizate <br/>
                        - chimici: antibiotice, pesticide, coloranți, acidul nitros, cofeina <br/>
                        - biologici: virusuri
                     </p> 
                 </div>
             </div>
         </div>
         
        <div className="flex justify-center">
        <span onClick={()=> void router.push('/9/ereditatea')} className="inline-flex items-center px-4 py-2 mr-3 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <svg aria-hidden="true" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
        Lecția anterioară
        </span>
        <span onClick={()=> void router.push('/9/genetica')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        Următoarea lecție
        <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </span>
        </div>      
 
         </>
     )
 }
 
 