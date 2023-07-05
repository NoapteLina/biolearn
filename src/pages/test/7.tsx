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

export const API_7 = {
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

const Test7 = () => {
  const [usedTSet, setUsedSet] = useState(0)
  const [intrebari, setIntrebari] = useState([
    new test('Este un constituent specific celulei vegetale:', 2, -1, [
      'lizozomul',
      'peretele celular',
      'reticulul endoplasmatic',
      'ribozomul',
    ]),

    new test(
      'Fiecare din celulele-fiice, rezultate din diviziunea meiotică a unei celule-mamă cu 2n = 28 cromozomi, are:',
      3,
      -1,
      [
        '2n = 14 cromozomi',
        '2n = 28 cromozomi',
        'n = 24 cromozomi',
        'n = 28 cromozomi',
      ]
    ),

    new test('Cristele intră în alcătuirea:', 2, -1, [
      'cloroplastelor',
      'mitocondriilor',
      'nucleului',
      'vacuolelor',
    ]),

    new test('Gregor Mendel:', 3, -1, [
      'a demonstrat segregarea independentă a perechilor de caractere',
      'a enunțat legea codominanței, în cazul grupelor de sânge',
      'a experimentat hibridarea pe plante autogame',
      'a realizat experiențe de hibridare la șoareci',
    ]),

    new test('Hemoglobina:', 2, -1, [
      'conține magneziu',
      'este o proteină',
      'se găsește în trombocite',
      'la nivelul plămânilor se combină cu CO2',
    ]),

    new test(
      'Nutrimente care rezultă din digestia chimică a lipidelor sunt:',
      1,
      -1,
      ['acizii grași', 'aminoacizii', 'glucoza', 'peptidele']
    ),

    new test('Bacilul fânului face parte din regnul:', 2, -1, [
      'Fungi',
      'Monera',
      'Protista',
      'Plante',
    ]),

    new test('Au rol în producerea energiei celulare:', 3, -1, [
      'dictiozomii',
      'lizozomii',
      'mitocondriile',
      'ribozomii',
    ]),

    new test('Respirația aerobă:', 1, -1, [
      'are loc în prezența oxigenului',
      'duce la sinteza de substanțe organice',
      'necesită prezența luminii',
      'se mai numește fermentație',
    ]),

    new test('Se deplasează prin fugă:', 4, -1, [
      'brotăcelul',
      'leneșul',
      'tritonul',
      'struțul',
    ]),

    new test('Sindromul Turner:', 4, -1, [
      'afectează în mod egal ambele sexe',
      'este o maladie autozomală',
      'reprezintă o trisomie',
      'se caracterizează prin prezența a 45 de cromozomi',
    ]),

    new test('Cloroplastele prezintă:', 3, -1, [
      'carioplasmă la interior',
      'criste cu enzime',
      'grane',
      'o membrană simplă',
    ]),

    new test('Artera pulmonară pornește din:', 3, -1, [
      'atriul drept',
      'atriul stâng',
      'ventriculul drept',
      'ventriculul stâng',
    ]),

    new test(
      'Este o cale comună, genitală și urinară, întâlnită la masculii mamiferelor:',
      3,
      -1,
      ['prostata', 'ureterul', 'uretra', 'vezica urinară']
    ),

    new test('Prin ereditate se înțelege:', 2, -1, [
      'apariția unor caractere diferite la descendenții unei familii',
      'moștenirea, de către descendenți, a unor caractere corespunzătoare speciei',
      'proprietatea indivizilor din aceeași specie de a se deosebi între ei',
      'transmiterea caracterelor de la descendenți la ascendenți',
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
export default Test7
