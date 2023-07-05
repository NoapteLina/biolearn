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

export const API_9 = {
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

const Test9 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test('Meristemele apicale:', 3, -1, [
      'conțin celule care nu se mai pot divide',
      'sunt alcătuite din celulele specializate',
      'se află în vârfurile de creștere',
      'sunt situate lateral de axul organului vegetativ',
    ]),

    new test(
      'Pentru a realiza fotosinteza, un organism viu trebuie să:',
      2,
      -1,
      [
        'aparțină regnului fungi',
        'conțină cloroplaste',
        'absoarbă glucoza din sol',
        'sintetizeze substanțe anorganice',
      ]
    ),

    new test('Drojdiile sunt:', 1, -1, [
      'ascomicete',
      'filicate',
      'sporozoare',
      'procariote',
    ]),

    new test(
      'Genotipurile tuturor gameților formați de un organism AaBb sunt:',
      4,
      -1,
      ['A, B, a, b', 'Aa, Bb', 'AaB, Aab', 'AB, Ab, aB, ab']
    ),

    new test('Tisa:', 1, -1, [
      'este o specie ocrotită prin lege',
      'face parte din grupul angiospermelor',
      'prezintă semințele închise în fruct',
      'se reproduce asexuat prin rizomi',
    ]),

    new test('La mamifere, pielea conține receptorii:', 3, -1, [
      'auditivi',
      'gustativi',
      'tactili',
      'vizuali',
    ]),

    new test('Sporozoarele aparțin regnului:', 4, -1, [
      'Animale',
      'Fungi',
      'Plante',
      'Protiste',
    ]),

    new test('În timpul profazei mitotice:', 3, -1, [
      'se dublează cantitatea de ADN',
      'se realizează fecundația',
      'se individualizează cromozomii',
      'se reduce la jumătate numărul de cromozomi ai celulelor',
    ]),

    new test('Fructul salcâmului este:', 4, -1, [
      'achemă',
      'bacă',
      'drupă',
      'păstaie',
    ]),

    new test('Ursul:', 1, -1, [
      'este un mamifer plantigrad',
      'respiră anaerob',
      'se hrănește autotrof',
      'se reproduce asexuat',
    ]),

    new test('Plantă dicotiledonată este:', 3, -1, [
      'grâul',
      'irisul',
      'măceșul',
      'porumbul',
    ]),

    new test('În cazul respirației anaerobe:', 4, -1, [
      'au loc reacții de oxidare completă',
      'se formează apă',
      'sunt oxidate substanțe anorganice',
      'rezultă produși intermediari',
    ]),

    new test('Păsările au:', 1, -1, [
      'fecundația internă',
      'nutriție parazită',
      'temperatura corpului variabilă',
      'respirație branhială',
    ]),

    new test(
      'Nutrimentele rezultate prin degradarea enzimatică a proteinelor sunt:',
      2,
      -1,
      ['acizii grași', 'aminoacizii', 'glicerolul', 'monozaharidele']
    ),

    new test('Aparține sistemelor digestiv și respirator:', 3, -1, [
      'cavitatea nazală',
      'esofagul',
      'faringele',
      'laringele',
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
export default Test9
