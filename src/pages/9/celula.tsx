/* eslint-disable @next/next/no-img-element */
import Image from 'next/image'
import React from "react"
import { useRouter } from "next/router";
export default function Celula() {
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
            className="relative left-[calc(50%-20rem)] aspect-[1200/1000] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-lime-300 to-green-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 12.1%, 80.7% 52%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div>

        <div className=" py-24 sm:py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-2">
          <div className="mx-auto max-w-7xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl text-center text-emerald-900">Celula și compoziția ei chimică</h2>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <div className="mt-0 text-lg text-gray-900 text-center">
                <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Definiție: </span> Celula este unitatea de bază, strcturală, funcțională și genetică a unui organism. <br/>
                <br/>
                <div className="flex justify-center">
                <Image src="/images/celula.jpg" width={350} height={350} alt="Picture of the author" className="rounded-lg"/>
                </div>
                </div>
                </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                 <span className="mt-0 text-lg text-gray-900"> <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Funcțiile celulei: </span><br/>
                  - menține homeostazia mediului intern <br/>
                  - sintetizează compuși proprii după un anumit cod <br/>
                  - are capacitatea de refacere și autoreproducere <br/>
                  - se adaptează la conđițiile de viață variate ale mediului <br />
                </span>
              </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <div className="mt-0 text-lg text-gray-900 text-right">
                  <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Observație! </span> Forma este diferită în funcție de poziție și funcție.  <br/>
                  Formele celulei: <br/>
                  - fusiformă <br/>
                  - sferică <br/>
                  - ovală <br/>
                  - piramidală <br/>
                  - stelată <br/>
                  <span className="flex justify-left -mt-48">
                  <Image src="/images/hematii.jpg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  <Image src="/images/neuroni.jpg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  </span>
                </div>
              </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <span className="mt-0 text-lg text-gray-900">
                  <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Compoziția chimică a celulei</span> <br/>
                  Celula conține: <br/>
                  - 60% apă <br/>
                  - substanțe anorganice (substanțe minerale): cloruri, sulfuri, carbonați <br/>
                  - substanțe organice: glucide, lipide, proteine, acizi nucleici, carbonați <br/>
                  Glucidele = carbonați (ex: amidon, glucoză, glicogen, chitina, celuloza) <br/>
                  Lipidele = fosfolipide și trigliceride <br/>
                  Proteinele = conțin aminoacizi (ex: cheratina, clorofila, hemoglobina, anticorpi) <br/>
                </span>
              </div>
              <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-16 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none">
                <div className="mt-0 text-lg text-gray-900  text-right">
                  <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Acizii nucleici</span> <br/>
                  - ADN = acid dezoxiribonucleic <br/>
                  <span className="underline decoration-dotted">Rol:</span> deține și transmite informația  genetică <br/>
                  - ARN = acid ribonucleic <br/>
                  <span className="underline decoration-dotted">Rol:</span> determină sinteza proteinelor
                  <span className="flex justify-left -mt-32">
                  <Image src="/images/adn.jpeg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  <Image src="/images/arn.jpg" width={300} height={300} alt="Picture of the author" className="rounded-lg"/>
                  </span>
                </div>
              </div>
            </div>
            </div>
          </div>        


          <div className="flex justify-center">
          <span onClick={()=> void router.push('/9/eucariota')} className="inline-flex items-center px-4 py-2 mb-8 text-sm font-medium text-lime-500 bg-white border border-lime-500 rounded-lg hover:bg-lime-500 hover:text-white dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
            Următoarea lecție
            <svg aria-hidden="true" className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </span>
          </div>

  </>

    )
}

