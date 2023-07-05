/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Button, Card } from 'flowbite-react'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline'

export class test {
  intrebare: string
  raspuns: number
  input: number
  raspunsuri: string[]
  constructor(
    intrebare: string,
    raspuns: number,
    input: number,
    raspunsuri: string[] = []
  ) {
    this.intrebare = intrebare
    this.raspuns = raspuns
    this.input = input
    this.raspunsuri = raspunsuri
  }
}

function shuffleQs(intrebari: test[]) {
  for (let i = intrebari.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[intrebari[i]!.intrebare, intrebari[j]!.intrebare] = [
      intrebari[j]!.intrebare,
      intrebari[i]!.intrebare,
    ]
    ;[intrebari[i]!.input, intrebari[j]!.input] = [
      intrebari[j]!.input,
      intrebari[i]!.input,
    ]
    ;[intrebari[i]!.raspuns, intrebari[j]!.raspuns] = [
      intrebari[j]!.raspuns,
      intrebari[i]!.raspuns,
    ]
    ;[intrebari[i]!.raspunsuri, intrebari[j]!.raspunsuri] = [
      intrebari[j]!.raspunsuri,
      intrebari[i]!.raspunsuri,
    ]
  }
  return intrebari
}
let g_Intrebari: test[]
let g_Answers: any[]
let usedSet: number

export const API_2 = {
  getQuestions: function () {
    return g_Intrebari
  },
  getAnswers: function () {
    return g_Answers
  },
  getUsedState: function () {
    return usedSet
  },
}

const Test2 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test('Celule fotosensibile conține:', 1, -1, [
      'retina',
      'sclerotica',
      'coroida',
      'pupila',
    ]),

    new test('Albinismul este o maladie:', 4, -1, [
      'heterozomală',
      'dominantă',
      'genomică',
      'autozomală',
    ]),

    new test('Anafaza mitotică se caracterizează prin:', 2, -1, [
      'formarea membranei nucleare',
      'migrarea cromozomilor monocromatidici spre poli',
      'dezorganizarea fusului de diviziune',
      'individualizarea cromozomilor bicromatidici',
    ]),

    new test(
      'Din categoria țesuturilor embrionare fac parte țesuturile',
      2,
      -1,
      ['secretoare', 'apicale', 'conductoare', 'de apărare']
    ),

    new test('Neuroni senzitivi cu rol de receptori se găsesc în:', 2, -1, [
      'mugurele gustativ',
      'epiteliul olfactiv',
      'coroida',
      'melcul membranos',
    ]),

    new test('Sunt talofite:', 1, -1, [
      'briofitele',
      'pterodofitele',
      'gimnospermele',
      'angiospermele',
    ]),

    new test('În procesul de fermentație lactică se oxidează', 1, -1, [
      'glucoza',
      'acidul lactic',
      'alcoolul etilic',
      'acidul acetic',
    ]),

    new test('Conțin enzime oxido-reducătoare', 4, -1, [
      'centrozomii',
      'vacuolele',
      'ribozomii',
      'mitocondriile',
    ]),

    new test('Orientarea frunzelor către lumină reprezintă:', 3, -1, [
      'o fotonastie',
      'o termonastie',
      'un fototropism',
      'un fototactism',
    ]),

    new test('Aparține artropodelor:', 1, -1, [
      'racul',
      'hidra',
      'râma',
      'meduza',
    ]),

    new test(
      'Regiunea de digestie chimică finală a alimentelor este reprezentată de:',
      2,
      -1,
      ['cavitatea bucală', 'intestinul subțire', 'stomac', 'intestinul gros']
    ),

    new test('Nucleoidul:', 3, -1, [
      'este un organ cu rol în respirația celulei procariote',
      'este alcătuit dintr-o moleculă de ARN circulară',
      'reprezintă genomul bacterian',
      'se află în interiorul nucleului la eucariote',
    ]),

    new test('HCl din sucul gastric', 3, -1, [
      'hidrolizează glucidele',
      'coagulează/încheagă laptele',
      'împiedică dezvoltarea germenilor',
      'emulsionează lipazele',
    ]),

    new test('În procesul de fermentație alcoolică se oxidează:', 4, -1, [
      'alcoolul etilic',
      'aminoacizii',
      'acidul acetic',
      'glucoza',
    ]),

    new test('Măduva spinării prezintă:', 3, -1, [
      'nuclei somatici la exterior',
      'substanță albă la interior',
      'fascicule de substanță albă la periferie',
      'substanță cenușie la exterior',
    ]),
  ])
  const [shouldRender, setRender] = useState(false)
  const tempAns = new Array(intrebari.length).fill(0)
  const [ansArray, setAnsarray] = useState(new Array(intrebari.length).fill(0))
  useEffect(() => {
    setIntrebari(shuffleQs(intrebari))
    setRender(true)
    g_Intrebari = intrebari
  }, [intrebari])
  useEffect(() => {
    g_Answers = ansArray
  }, [ansArray])
  useEffect(() => {
    usedSet = usedTSet
  }, [usedTSet])
  const router = useRouter()
  let currAns = -1
  const [counter, setCounter] = useState(0)
  const [currWord, setWord] = useState('Următoarea întrebare')
  const activateButton = (id: number) => {
    currAns = id
    document.getElementById(id.toString())?.classList.add('outline')
    for (let i = 1; i <= 4; i++) {
      if (i != id)
        document.getElementById(i.toString())?.classList.remove('outline')
    }
  }
  const submit = () => {
    intrebari[counter]!.input = currAns
    if (currAns === intrebari[counter]?.raspuns) {
      tempAns[counter] = 1
    }
    if(currAns == -1) alert("Nu ai selectat niciun raspuns!")
    setUsedSet(1)
    setCounter((count) => count + 1)
    document.getElementById(currAns.toString())?.classList.remove('outline')
    if (counter >= intrebari.length - 2) {
      setWord('Finalizează testul')
      console.log(usedSet)
    }
    if (counter == intrebari.length - 1) {
      setAnsarray(tempAns)
      setRender(false)
      void router.push('/test/rezultate')
    }
  }
  function renderQuestions() {
    if (shouldRender) {
      return (
        <>
          <Card className="max-w-sm mx-auto my-auto flex h-1/2 rounded-lg relative grid mt-28 border-lime-300 bg-transparent">
            <h5 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {intrebari[counter]?.intrebare}
            </h5>
            <Card className="border-lime-300 bg-transparent">
              <Button
                
                gradientDuoTone="tealToLime"
                id="1"
                onClick={() => activateButton(1)}
              >
                {intrebari[counter]?.raspunsuri[0]}
              </Button>
              <Button
                
                gradientDuoTone="tealToLime"
                id="2"
                onClick={() => activateButton(2)}
              >
                {intrebari[counter]?.raspunsuri[1]}
              </Button>
              <Button
                
                gradientDuoTone="tealToLime"
                id="3"
                onClick={() => activateButton(3)}
              >
                {intrebari[counter]?.raspunsuri[2]}
              </Button>
              <Button
                
                gradientDuoTone="tealToLime"
                id="4"
                onClick={() => activateButton(4)}
              >
                {intrebari[counter]?.raspunsuri[3]}
              </Button>
            </Card>
            <Button className="mx-auto w-32" gradientDuoTone="tealToLime" onClick={() => submit()}>
              {currWord} {''}<ArrowSmallRightIcon className=" ml-2 w-4"/>
            </Button>
          </Card>
        </>
      )
    } else return <div></div>
  }

  return (
  <div> 
    {renderQuestions()} 
    <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
    >
        <div
            className="relative left-[calc(50%-20rem)] aspect-[16/9] w-[27.125rem] -translate-x-1 rotate-[30deg] bg-gradient-to-tr from-yellow-500 to-green-500 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
                clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
            }} />
        </div><div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
        >
            <div
                className="relative right-[calc(0%+11rem)] aspect-[16/9] w-[36.125rem] -translate-x-1/2  rotate-[30deg] bg-gradient-to-tr from-lime-600 to-green-900 opacity-30 sm:left-[calc(50%+15rem)] sm:w-[72.1875rem]"
                style={{
                    clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)'
                }} />
        </div>
  </div>
  )
}
export default Test2
