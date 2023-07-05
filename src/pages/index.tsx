/* eslint-disable @next/next/no-html-link-for-pages */
import { AcademicCapIcon, BookOpenIcon, ClipboardDocumentListIcon, PhotoIcon } from '@heroicons/react/24/outline'


import { Button } from 'flowbite-react'
import { useRouter } from 'next/router'

const features = [
  {
    name: 'Lecții',
    description:
      'Lecțiile noastre sunt sintetizate în așa fel încat să fie pe înțelesul tuturor și să conțină toate informațiile necesare pentru a înțelege materia de biologie de la 0. ',
    icon: BookOpenIcon,
  },
  {
    name: 'Mobele bacalaureat',
    description:
      'Acestea sunt rezolvate, pentru a vedea cum trebuie lucrată o problemă și pentru a înțelege cum se aplică teoria în practică.',
    icon: AcademicCapIcon ,
  },
  {
    name: 'Teste',
    description:
      'Sunt concepute pentru a te ajuta să îți testezi cunoștințele și să vezi unde mai ai nevoie de îmbunătățiri.',
    icon: ClipboardDocumentListIcon,
  },
  {
    name: 'Imagini',
    description:
      'Lecțiile conțin imagini reprezentative pentru persoanele cu o memorie vizuală mai bună.',
    icon: PhotoIcon,
  },
]
const handleClickScroll = () => {
    const features = document.getElementById('features');
    if (features) {
      // 👇 Will scroll smoothly to the top of the next section
      features.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function Home() {
  const router = useRouter()

  return (
    <div className="">
      <div className="relative px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl underline decoration-solid">
              Învață acum biologie
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pregătește-te pentru examenul de bacalaureat la biologie cu
              ajutorul nostru.
              <br /> Ai la dispoziție noțiunile teoretice necesare, teste pentru verificarea cunoștințelor și modele de bacalaureat rezolvate.
            </p>
            <div className="mt-6 flex items-center justify-center gap-x-6">
              <Button
                gradientDuoTone="greenToBlue"
                pill
                href='https://github.com/BioLearn2023/BioLearn'
              >
                <p>Începe acum</p>
              </Button>
              <Button gradientDuoTone="tealToLime" outline pill onClick={handleClickScroll}>
                <p>Features</p>
              </Button>
            </div>
          </div>
          <div id="features" className="mx-auto mt-[40rem] max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-green-600">
              Învață acum
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Tot ce ai nevoie pentru a obține nota maximă la examenul de bacalaureat 
            </p>
            
          </div>
          <div className="mx-auto max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {features.map((feature) => (
                <div key={feature.name} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-lime-600">
                      <feature.icon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(10%-20rem)]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-x-0 -top-70 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(60%-20rem)] aspect-[678/678] w-[50.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#16a34a] to-[#fde047] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[80.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
          <div
            className="relative left-[calc(50%+10rem)] aspect-[1080/1920] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#065f46] to-[#a3e635] opacity-30 sm:left-[calc(50%+20rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
          <div className="mx-auto mt-32 max-w-7xl px-6 lg:px-8">
            <div className="absolute inset-x-0 top-96 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
              <div
                className="relative left-[calc(50%-20rem)] aspect-[1920/1920] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-cyan-500 to-yellow-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative left-[calc(50%-11rem)] aspect-[650/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-yellow-200 to-green-900 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>
            <div
              className="absolute inset-x-0 mt-18 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              aria-hidden="true"
            >
              <div
                className="relative right-[calc(50%+11rem)] aspect-[1080/1920] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-green-500 to-blue-200 opacity-30 sm:left-[calc(10%+25rem)] sm:w-[72.1875rem]"
                style={{
                  clipPath:
                    'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
                }}
              />
            </div>

                        
            

          </div>
        </div>
      </div>
    </div>
  )
}
