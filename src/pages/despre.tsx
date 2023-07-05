/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import React, { useState } from 'react'
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from '@material-tailwind/react'
export default function Example(): JSX.Element {
  const [open, setOpen] = useState(1)
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleOpen = (value: any) => {
    setOpen(open === value ? 0 : value)
  }
  return (
    <>
      <div>
        <div className="mt-40">
          <div>
            <div className="text-center">
              <span className="bg-black bg-clip-text text-5xl font-extrabold text-transparent">
                Despre{' '}
              </span>
              <span className="bg-gradient-to-r from-green-800 to-lime-500 bg-clip-text text-5xl font-extrabold text-transparent">
                BioLearn
              </span>
            </div>
          </div>
          <div className="mt-32 text-center mx-[5%]">
            <Accordion open={open === 1}>
              <div className="w-full">

                <AccordionHeader
                  className="w-auto ml-[50%] translate-x-[-50%]"
                  onClick={() => {
                    handleOpen(1)
                  }}
                >
                  Ce este BioLearn?
                </AccordionHeader>
              </div>
              <AccordionBody className="text-lg">
                BioLearn este un proiect realizat cu scopul de a ajuta elevii
                care aleg să dea proba de bacalaureat la biologie, utilizând
                lecții redactate pe înțelesul oricui, dar și sintetizate astfel
                încât să nu privim la niște paragrafe de text simple, teste
                pentru a ne putea verifica cunoștințele pe care le avem și
                pentru a le îmbunătăți și modele de bacalaureat rezolvate,
                astfel încât să putem vedea cum se rezolvă corect subiectele.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}>
              <AccordionHeader
                className="w-auto ml-[50%] translate-x-[-50%]"
                onClick={() => {
                  handleOpen(2)
                }}
              >
                Cum sunt realizate testele?
              </AccordionHeader>
              <AccordionBody className="text-lg">
                Testele sunt simple, realizate în așa fel încât să îți poți
                recapitula toată materia prin doar niște simple întrebări. La
                finalul testului te așteaptă o pagină specială unde poți vedea
                ce ai greșit, dar și ce ai făcut corect, astfel încât data
                viitoare să poți răspunde corect la toate întrebările.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}>
              <AccordionHeader
                className=" w-auto ml-[50%] translate-x-[-50%]"
                onClick={() => {
                  handleOpen(3)
                }}
              >
                În ce este realizat proiectul?{' '}
              </AccordionHeader>
              <AccordionBody className="text-lg">
                BioLearn este realizat în{' '}
                <span className="underline">TypeScript</span> și{' '}
                <span className="underline">React</span> pentru interfață{' '}
                <span className="underline">Flowbite</span>,{' '}
                <span className="underline">Flowbite React</span>,{' '}
                <span className="underline">Material Tailwind</span>,{' '}
                <span className="underline">Tailwind UI</span> și{' '}
                <span className="underline">Tailwind CSS</span> și{' '}
                <span className="underline">HeroIcons</span> pentru design.
              </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}>
              <AccordionHeader
                className=" w-auto ml-[50%] translate-x-[-50%]"
                onClick={() => {
                  handleOpen(4)
                }}
              >
                De cine este realizat proiectul?
              </AccordionHeader>
              <AccordionBody className="text-lg">
                Proiectul este realizat de Mincă Bianca, elevă la Liceul
                Teoretic Tudor Vladimirescu din București, o elevă care a dorit
                să ajute și alți elevi pentru a reuși promovarea marelui examen
                din viața lor.
              </AccordionBody>
            </Accordion>
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10  overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-20rem)] aspect-[1155/450] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-300 to-lime-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[650/570] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-green-300 to-lime-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative right-[calc(0%+11rem)] aspect-[600/600] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-green-500 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
//  TODO: Add a logo
