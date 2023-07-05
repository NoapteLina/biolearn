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
                        <div className="text-green-500" onClick={()=> void router.push('https://www.hotnews.ro/stiri-educatie-25634702-bac-2022-subiecte-fizica-biologie-anatomie-geografie-bacalaureat.htm')}>“BAC 2022: Subiecte La Fizică, Biologie-Anatomie Și Geografie Primite La Bacalaureat 2022. Baremul a Fost Publicat - HotNews.Ro.” HotNews.Ro, https://www.hotnews.ro/stiri-educatie-25634702-bac-2022-subiecte-fizica-biologie-anatomie-geografie-bacalaureat.htm. Accessed 2023.</div>
                        <div className="text-green-500" onClick={()=> void router.push('https://liceunet.ro/bac-biologie-vegetala/rezolvari/2023/modele-de-subiecte')}>“Bac Biologie Vegetala Si Animala 2023 Modele de Subiecte.” Liceunet.Ro: Ajutorul Tău Pentru Liceu, https://liceunet.ro/bac-biologie-vegetala/rezolvari/2023/modele-de-subiecte. Accessed 5 July 2023.</div>
                        <div className="text-green-500" onClick={()=> void router.push('https://profesorjitaruionel.com/variante-bac-2020-noi-teste-de-antrenament-edu-toate-probele-scrise/')}>Teste de Antrenament Evaluarea Nationala 2023 -Clasa AVIII-a (Matematica Si Limba Romana). #JitaruIonelBLOG, 5 May 2016, https://profesorjitaruionel.com/variante-bac-2020-noi-teste-de-antrenament-edu-toate-probele-scrise/e.</div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Modele bacalaureat</span><br/>
                        <Link className="text-green-500" onClick={()=> void router.push('https://www.youtube.com/@RalucaMihaelaGrecu')} href="https://www.youtube.com/@RalucaMihaelaGrecu">- https://www.youtube.com/@RalucaMihaelaGrecu</Link>
                        <div className="text-green-500" onClick={()=> void router.push('https://www.youtube.com/@biologiapentrutoti8471')}>- https://www.youtube.com/@biologiapentrutoti8471</div>
                    </div>

                    <div className="mx-auto mt-10 max-w-2x1 gap-x-8 gap-y-6 border-t border-green-900 pt-10 sm:mt-10 sm:pt-10 lg:mx-0 lg:max-w-none"></div>

                    <div className="mt-0 text-lg text-grey-600">
                        <span className="underline decoration-wavy text-[#65a30d] font-extrabold">Imagini</span>
                        <span className="text-green-500"> <br/>
                        - “Bac Biologie Vegetala Si Animala 2023 Modele de Subiecte.” Liceunet.Ro: Ajutorul Tău Pentru Liceu, https://liceunet.ro/bac-biologie-vegetala/rezolvari/2023/modele-de-subiecte. Accessed 5 July 2023.<br/>
                        - https://www.google.com/search?rlz=1C1CHZN_enRO960RO960&sxsrf=AB5stBhzLN-ZRWLK1k-_UdyMB86FRcwrxA:1688589638483&q=celula&tbm=isch&sa=X&ved=2ahUKEwi9v8rMtvj_AhXFMewKHfCNClMQ0pQJegQIBhAB&biw=1536&bih=763&dpr=1.25#imgrc=mKCKadz_ez60CM <br/>
                        - https://www.google.com/search?q=celula+animala+&tbm=isch&ved=2ahUKEwjgn6uxt_j_AhURHuwKHYBLC7sQ2-cCegQIABAA&oq=celula+animala+&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIECAAQHjIGCAAQBRAeMgYIABAIEB4yBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQ6BwgAEBMQgAQ6CAgAEAUQHhATOggIABAIEB4QEzoHCAAQigUQQzoICAAQgAQQsQM6CwgAEIAEELEDEIMBUL4EWMgSYNUTaABwAHgAgAGSAYgBjAySAQQxMC42mAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=GdalZKCvL5G8sAeAl63YCw&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=6WBpKk1euTx1KM <br/>
                        - https://www.google.com/search?q=lizozomi&tbm=isch&ved=2ahUKEwjUvs2zt_j_AhVP0QIHHfNWCgcQ2-cCegQIABAA&oq=lizozomi&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIGCAAQBRAeMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEMgcIABAYEIAEOggIABCABBCxAzoFCAAQgAQ6CAgAELEDEIMBOgQIABAeUABY8wdggQpoAHAAeACAAYwBiAGJB5IBAzIuNpgBAKABAaoBC2d3cy13aXotaW1nwAEB&sclient=img&ei=HtalZNS3IM-ii-gP862pOA&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=O1dydJbyfRujyM <br/>
                        - https://www.google.com/search?q=ribozomi&tbm=isch&ved=2ahUKEwih4P3Ft_j_AhWEwgIHHdc2C2cQ2-cCegQIABAA&oq=ribozomi&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBAgAEB4yBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQyBwgAEBgQgAQ6BggAEAcQHjoHCAAQigUQQzoICAAQgAQQsQM6CwgAEIAEELEDEIMBUPoIWMAPYOYQaABwAHgAgAGVAYgBqQeSAQM1LjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=RdalZOGpBISFi-gP1-2suAY&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=Zur7_abD6sfQEM <br/>
                        - https://www.google.com/search?q=triton&tbm=isch&ved=2ahUKEwiJvIHht_j_AhWBpicCHeizBVoQ2-cCegQIABAA&oq=triton&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoGCAAQBxAeOgcIABAYEIAEOgcIIxDqAhAnOggIABCABBCxA1C3BViDJWC3JmgBcAB4AIABZYgBmQWSAQM1LjKYAQCgAQGqAQtnd3Mtd2l6LWltZ7ABCsABAQ&sclient=img&ei=fdalZMmJLoHNnsEP6OeW0AU&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=HhlCER2oaUQp5M <br/>
                        - https://www.google.com/search?q=muschi&tbm=isch&ved=2ahUKEwiv4c_kt_j_AhVFnCcCHWGtBowQ2-cCegQIABAA&oq=muschi&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIABCKBRBDOggIABCABBCxAzoICAAQsQMQgwE6CwgAEIAEELEDEIMBOgoIABCKBRCxAxBDUJMVWPgZYP0baABwAHgAgAGKAYgB6QWSAQMzLjSYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=hdalZO-KFMW4nsEP4dqa4Ag&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=1ZLoTE3Q3NCt3M <br/>
                        - https://www.google.com/search?q=licheni&tbm=isch&ved=2ahUKEwjkqc_tt_j_AhWGnCcCHbl9D0cQ2-cCegQIABAA&oq=licheni&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQigUQQzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEOgcIIxDqAhAnOggIABCABBCxAzoICAAQsQMQgwFQsQhY_Rlg-BtoAXAAeACAAYUBiAHQBpIBAzQuNJgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=mNalZOT9C4a5nsEPufu9uAQ&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=fZkzP8h7SPvPJM <br/>
                        - https://www.google.com/search?q=tesuturi+conjunctive&tbm=isch&ved=2ahUKEwiIytT1t_j_AhVumCcCHei4DqEQ2-cCegQIABAA&oq=tesuturi+conjunctive&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIFCAAQgAQ6BwgAEIoFEEM6BwgjEOoCECc6CAgAEIAEELEDOgcIABAYEIAEUOUGWJvmAmDI5wJoBnAAeACAAWuIAaIRkgEEMTcuN5gBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=qdalZMjRA-6wnsEP6PG6iAo&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=dPJs93-zhVnj7M <br/>
                        - https://www.google.com/search?q=tesuturi+musculare&tbm=isch&ved=2ahUKEwiox-6ZuPj_AhXloUwKHdhLBS4Q2-cCegQIABAA&oq=tesuturi+musculare&gs_lcp=CgNpbWcQAzIECCMQJzIHCAAQGBCABFDTBVjTBWCgFWgAcAB4AIABiwGIAeABkgEDMS4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=9NalZKj9O-XDsgLYl5XwAg&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=Wp0xyGM6P8s2pM <br/>
                        - https://www.google.com/search?q=sistemul+reproducator+feminin&tbm=isch&ved=2ahUKEwj60LGcuPj_AhUSmycCHRJ_DW8Q2-cCegQIABAA&oq=sistemul+&gs_lcp=CgNpbWcQARgAMgQIIxAnMgQIIxAnMggIABCABBCxAzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQ6BwgAEBgQgAQ6BwgAEIoFEEM6BwgjEOoCECdQggtYmTJg7jtoB3AAeACAAXuIAeUMkgEEMTEuNpgBAKABAaoBC2d3cy13aXotaW1nsAEKwAEB&sclient=img&ei=-talZPrrEJK2nsEPkv61-AY&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=PbLA5nwK_Z99wM <br/>
                        - https://www.google.com/search?q=sistemul+digestiv&tbm=isch&ved=2ahUKEwj4rOSluPj_AhUTTaQEHcMYB04Q2-cCegQIABAA&oq=sistemul+digestiv&gs_lcp=CgNpbWcQAzIECCMQJzIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDoGCAAQBxAeOgcIABAYEIAEOgcIABCKBRBDOggIABCABBCxAzoKCAAQigUQsQMQQ1DMBlj8FmDTHWgAcAB4AYABrwmIAdsnkgELMy42LjMuNi0xLjKYAQCgAQGqAQtnd3Mtd2l6LWltZ8ABAQ&sclient=img&ei=DdelZLjyO5OakdUPw7Gc8AQ&bih=763&biw=1536&rlz=1C1CHZN_enRO960RO960#imgrc=KeIq8vrrY06btM <br/>
                        </span>
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
 
 

 